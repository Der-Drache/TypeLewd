import { Solid } from '../materials';
import { Cum } from '../liquids';

export class BaseSextoy extends Solid {

  private _isPenetrator = false;
  private _isPenetrable = false;

  constructor(name: string) {
    super(name);
  }

  //#region accessors
  isPenetrator(): boolean {
    return this._isPenetrator;
  }

  setIsPenetrator(isPenetrator: boolean): this {
    this._isPenetrator = isPenetrator;
    return this;
  }

  isPenetrable(): boolean {
    return this._isPenetrable;
  }

  setIsPenetrable(isPenetrable: boolean): this {
    this._isPenetrable = isPenetrable;
    return this;
  }
  //#endregion
}
