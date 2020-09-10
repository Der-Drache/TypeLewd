import { BaseBodyPart } from '../BaseBodyPart';
import { BaseBeing } from '../../beings/BaseBeing';

export class BaseSlit extends BaseBodyPart {

  private _vertical = true;

  constructor(name: string, being?: BaseBeing) {
    super(name, being);

    this.setIsPenetrable(true);
  }

  //#region contextual accessors
  horizontal(): boolean {
    return !this._vertical;
  }

  setHorizontal(horizontal: boolean): this {
    this._vertical = !horizontal;
    return this;
  }
  //#endregion

  //#region accessors
  vertical(): boolean {
    return this._vertical;
  }

  setVertical(vertical: boolean): this {
    this._vertical = vertical;
    return this;
  }
  //#endregion
}
