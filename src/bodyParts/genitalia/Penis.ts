import { BaseBodyPart } from '../BaseBodyPart';
import { Cum } from '../../liquids';
import { PenisType } from '../../data';
import { BaseBeing } from '../../beings/BaseBeing';

export class Penis extends BaseBodyPart {

  private _barbs = false;
  private _ridges = false;
  private _knot = false;
  private _type: PenisType = PenisType.regular;
  private _length = 0;
  private _cum = new Cum();

  constructor(being?: BaseBeing) {
    super('penis', being);

    this.setIsPenetrator(true);
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

  length(): number {
    return this._length;
  }

  setLength(length: number): this {
    this._length = length;
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
