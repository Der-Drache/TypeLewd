import _ from 'lodash';

import { Solid, IPenetrator } from '.';
import { clamp, IPoint, lerp, mean, norm, map, last } from '../utils';
import { IPenetrationMetadata, Penetration, IPenetrationMetadataPenetratorSizes } from './_Penetration';
import { calculateBezierPoint } from './../utils/bezierCurves';
import { Shape } from './Shape';
import { FunctionLogger } from '../FunctionLogger';
import { SuiteFunctionLogger } from '../SuiteFunctionLogger';

const maxStretchFactor = 0.5;
const tightenTimeFactor = 0.1;
const stretchTimeFactor = 0.2;
const e = 1.5;

/**
 * tighten a size based on its min size, current max size and the time since last penetration
 * @param min minimum size
 * @param currMax current maximum size
 * @param timeSinceLastPen the time since last penetration, in days
 * @returns the tightened size
 */
const tighten = (min: number, currMax: number, timeSinceLastPen: number): number => {
  return e ** (-timeSinceLastPen * tightenTimeFactor) * (currMax - min) + min;
}

/**
 * stretch a size based on its min size, max size, penetrator's size, current max size, penetration time and the time since last penetration
 * @param min minimum size
 * @param max physically possible maximum size
 * @param penSize penetrator's size
 * @param currMax current maximum size
 * @param penTime penetration time, duration in minutes
 * @param timeSinceLastPen the time since last penetration, in days
 * @returns the stretched size
 */
const stretch = (min: number, max: number, penSize: number, currMax: number, penTime: number, timeSinceLastPen: number): number => {
  // tighten the size based on the time since last penetration beforehand
  currMax = tighten(min, currMax, timeSinceLastPen);
  penSize = Math.max(penSize, min);
  // mathematical curving function
  const sizeCurve = (x) => 2 * x ** 5 - x ** 9;

  const sizeFactor = norm(penSize, min, currMax);
  // we define `curvedSize` with 1 when `penSize` is greater than `currMax`
  // otherwise curving it will result to NaN
  const curvedSize = penSize > currMax
    ? 1
    : sizeCurve(sizeFactor);

  const stretchedSize = currMax * (1 + curvedSize * maxStretchFactor * (-(e ** (-penTime * stretchTimeFactor)) + 1));
  return Math.min(max, stretchedSize)
}

export interface IPenetrable extends Solid {
  pushPenetrator(penetrator: IPenetrator): this;
  pushLiquid(liquid: any): this;
  pushPenetration(penetration: Penetration): this;

  lastPenetration(): Penetration;
  lastFinishedPenetration(): Penetration;

  penetrators(): IPenetrator[];
  setPenetrators(penetrators: IPenetrator[]): this;
  liquids(): any[];
  setLiquids(liquids: any[]): this;
  penetrations(): Penetration[];
  setPenetrations(penetrations: Penetration[]): this;
}

export class Penetrable extends Solid implements IPenetrable {

  private _penetrators: IPenetrator[] = [];
  // TODO
  private _liquids: any[] = [];
  private _penetrations: Penetration[] = [];

  constructor(name: string) {
    super(name);
  }

  //#region processing
  pushPenetrator(penetrator: IPenetrator): this {
    this._penetrators.push(penetrator);
    return this;
  }

  pushLiquid(liquid: string): this {
    this._liquids.push(liquid);
    return this;
  }

  pushPenetration(penetration: Penetration): this {
    this._penetrations.push(penetration);
    return this;
  }

  lastPenetration(): Penetration {
    return this._penetrations[this._penetrations.length - 1];
  }

  lastFinishedPenetration(): Penetration {
    return this._penetrations.slice().reverse().find(p => p.finishedOn());
  }

  getStretchedSizes(): IPoint[] {
    const limitDate = new Date();
    limitDate.setMonth(limitDate.getMonth() - 2);
    let lastMaxX;
    let lastMaxY;
    let lastMaxZ;

    const points = this.penetrations()
      .filter(penetration => {
        return penetration.finishedOn().valueOf() - limitDate.valueOf() > 0
      })
      .map((penetration, i) => {
        const penetratorSize = penetration.penetrator().originalSize();
        const penetratorZ = penetratorSize.z().centimeters()
        const penetratorX = penetratorSize.x().centimeters()
        const penetratorY = penetratorSize.y().centimeters()

        const currentSize = this.currentSize();
        const currentZ = currentSize.z().centimeters()
        const currentX = currentSize.x().centimeters()
        const currentY = currentSize.y().centimeters()

        const maxSize = this.maxSize();
        const maxZ = maxSize.z().centimeters()
        const maxX = maxSize.x().centimeters()
        const maxY = maxSize.y().centimeters()

        let currMaxX;
        let currMaxY;
        let currMaxZ;
        let timeSinceLastPen;

        if (i) {
          currMaxX = lastMaxX;
          currMaxY = lastMaxY;
          currMaxZ = lastMaxZ;
          // TODO use the time since last penetration
          timeSinceLastPen = 10;
        } else {
          currMaxX = lerp(0.1, currentX, maxX);
          currMaxY = lerp(0.1, currentY, maxY);
          currMaxZ = lerp(0.1, currentZ, maxZ);
          timeSinceLastPen = 0;
        }

        // TODO use penetration time
        const sizeX = stretch(currentX, maxX, penetratorX, currMaxX, 720, timeSinceLastPen);
        const sizeY = stretch(currentY, maxY, penetratorY, currMaxY, 720, timeSinceLastPen);
        const sizeZ = stretch(currentZ, maxZ, penetratorZ, currMaxZ, 720, timeSinceLastPen);

        lastMaxX = sizeX;
        lastMaxY = sizeY;
        lastMaxZ = sizeZ;

        return {
          x: sizeX,
          y: sizeY,
          z: sizeZ,
        };
      });

    return points;
  }
  //#endregion

  //#region accessors
  penetrators(): IPenetrator[] {
    return this._penetrators;
  }

  setPenetrators(penetrators: IPenetrator[]): this {
    this._penetrators = penetrators;
    return this;
  }

  liquids(): any[] {
    return this._liquids;
  }

  setLiquids(liquids: any[]): this {
    this._liquids = liquids;
    return this;
  }

  penetrations(): Penetration[] {
    return this._penetrations;
  }

  setPenetrations(penetrations: Penetration[]): this {
    penetrations.forEach(p => p.setPenetrable(this));
    this._penetrations = penetrations;
    return this;
  }
  //#endregion
}
