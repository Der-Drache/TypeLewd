import { BaseBodyPart } from '../BaseBodyPart';
import { BaseBeing } from '../../beings/BaseBeing';

export class Balls extends BaseBodyPart {

  private _external = false;
  private _amount = 2;

  constructor(being?: BaseBeing) {
    super('balls', being);
  }

  //#region contextual accessors
  internal(): boolean {
    return !this._external;
  }

  setInternal(internal: boolean): this {
    this._external = !internal;
    return this;
  }
  //#endregion

  //#region accessors
  external(): boolean {
    return this._external;
  }

  setExternal(external: boolean): this {
    this._external = external;
    return this;
  }

  amount(): number {
    return this._amount;
  }

  setAmount(amount: number): this {
    this._amount = amount;
    return this;
  }
  //#endregion
}
