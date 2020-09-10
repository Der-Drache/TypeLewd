import { Maw } from '.';
import { BaseBodyPart } from './BaseBodyPart';
import { BaseBeing } from '../beings/BaseBeing';

export class Head extends BaseBodyPart {

  private _maw: Maw;

  constructor(being?: BaseBeing) {
    super('head', being);

    this._maw = new Maw(being);
  }

  //#region accessors
  maw(): Maw {
    return this._maw;
  }

  setMaw(maw: Maw): this {
    this._maw = maw;
    return this;
  }

  setBeing(being: BaseBeing): this {
    super.setBeing(being);
    this._maw.setBeing(being);
    return this;
  }
  //#endregion
}
