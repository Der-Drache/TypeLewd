import { BaseAccessory } from './BaseAccessory';

export interface IBondageData {
  name: string;
  penetrable: boolean;
  penetrator: boolean;
  tiesMultipleParts: boolean;
}

export class BondageAccessory extends BaseAccessory {

  private _isPenetrable = false;
  private _isPenetrator = false;
  private _isLocked = false;

  constructor(name: string) {
    super(name);
  }

  //#region
  isPenetrable(): boolean {
    return this._isPenetrable;
  }

  setIsPenetrable(isPenetrable: boolean): this {
    this._isPenetrable = isPenetrable;
    return this;
  }

  isPenetrator(): boolean {
    return this._isPenetrator;
  }

  setIsPenetrator(isPenetrator: boolean): this {
    this._isPenetrator = isPenetrator;
    return this;
  }

  isLocked(): boolean {
    return this._isLocked;
  }

  setIsLocked(isLocked: boolean): this {
    this._isLocked = isLocked;
    return this;
  }
  //#endregion
}
