import { BaseBodyPart } from './BaseBodyPart';
import { BaseBeing } from '../beings/BaseBeing';
import { IPenetrable, Penetrable, IPenetrator, Shape } from '../materials';
import { Penetration } from '../materials/_Penetration';
import { IPoint } from '../utils';

export class Maw extends BaseBodyPart implements IPenetrable {

  private penetrable = new Penetrable('maw');

  constructor(being?: BaseBeing) {
    super('maw', being);
  }

  //#region accessors override
  setOriginalSize(originalSize: Shape): this {
    this.penetrable.setOriginalSize(originalSize);
    return super.setOriginalSize(originalSize);
  }

  setCurrentSize(currentSize: Shape): this {
    this.penetrable.setCurrentSize(currentSize);
    return super.setCurrentSize(currentSize);
  }

  setMaxSize(maxSize: Shape): this {
    this.penetrable.setMaxSize(maxSize);
    return super.setMaxSize(maxSize);
  }

  setSize(size: Shape): this {
    this.penetrable.setSize(size);
    return super.setSize(size);
  }
  //#endregion

  //#region penetrable
  pushPenetrator(penetrator: IPenetrator): this {
    this.penetrable.pushPenetrator(penetrator);
    return this;
  }

  pushLiquid(liquid: any): this {
    this.penetrable.pushLiquid(liquid);
    return this;
  }

  pushPenetration(penetration: Penetration): this {
    this.penetrable.pushPenetration(penetration);
    return this;
  }

  penetrators(): IPenetrator[] {
    return this.penetrable.penetrators();
  }

  setPenetrators(penetrators: IPenetrator[]): this {
    this.penetrable.setPenetrators(penetrators);
    return;
  }

  liquids(): any[] {
    return this.penetrable.liquids();
  }

  setLiquids(liquids: any[]): this {
    this.penetrable.setLiquids(liquids);
    return this;
  }

  penetrations(): Penetration[] {
    return this.penetrable.penetrations();
  }

  setPenetrations(penetrations: Penetration[]): this {
    this.penetrable.setPenetrations(penetrations);
    return this;
  }

  //#region processing
  lastPenetration(): Penetration {
    return this.penetrable.lastPenetration();
  }

  lastFinishedPenetration(): Penetration {
    return this.penetrable.lastFinishedPenetration();
  }

  getStretchedSizes(): IPoint[] {
    return this.penetrable.getStretchedSizes();
  }
  //#endregion
  //#endregion
}
