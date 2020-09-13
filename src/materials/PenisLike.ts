import { Penetrator } from '.';
import { PenisType } from '../data';
import { Cum } from '../liquids';

export interface IPenisLike extends Penetrator {
  barbs(): boolean;
  setBarbs(barbs: boolean): this;

  ridges(): boolean;
  setRidges(ridges: boolean): this;

  knot(): boolean;
  setKnot(knot: boolean): this;

  type(): PenisType;
  setType(type: PenisType): this;

  cum(): Cum;
  setCum(cum: Cum): this;
}

export class PenisLike extends Penetrator implements IPenisLike {

  private _barbs = false;
  private _ridges = false;
  private _knot = false;
  private _type: PenisType = PenisType.regular;
  private _cum: Cum;

  constructor(name: string) {
    super(name);
  }

  //#region accessors
  barbs(): boolean {
    return this._barbs;
  }

  setBarbs(barbs: boolean): this {
    this._barbs = barbs;
    return this;
  }

  ridges(): boolean {
    return this._ridges;
  }

  setRidges(ridges: boolean): this {
    this._ridges = ridges;
    return this;
  }

  knot(): boolean {
    return this._knot;
  }

  setKnot(knot: boolean): this {
    this._knot = knot;
    return this;
  }

  type(): PenisType	 {
    return this._type;
  }

  setType(type: PenisType): this {
    this._type = type;
    return this;
  }

  cum(): Cum {
    return this._cum;
  }

  setCum(cum: Cum): this {
    this._cum = cum;
    return this;
  }
  //#endregion
}
