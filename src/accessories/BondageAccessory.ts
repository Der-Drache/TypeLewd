import { BaseAccessory } from './BaseAccessory';
import { bondageAccessories } from '../data';

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
  private _tiesMultipleParts = false;
  private _notFound = false;

  constructor(name: string) {
    super(name);

    const accessoryData = bondageAccessories.find(ba => ba.name === name);

    if (accessoryData) {
      this.setIsPenetrable(accessoryData.penetrable);
      this.setIsPenetrator(accessoryData.penetrator);
      this.setTiesMultipleParts(accessoryData.tiesMultipleParts);
    } else {
      this.setNotFound(true);
    }
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

  notFound(): boolean {
    return this._notFound;
  }

  private setNotFound(notFound: boolean): this {
    this._notFound = notFound;
    return this;
  }

  tiesMultipleParts(): boolean {
    return this._tiesMultipleParts;
  }

  setTiesMultipleParts(tiesMultipleParts: boolean): this {
    this._tiesMultipleParts = tiesMultipleParts;
    return this;
  }
  //#endregion
}
