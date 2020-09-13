import { Penetrator } from '../materials';
import { Cum } from '../liquids';

export class Dildo extends Penetrator {

  private _isVibrator = false;

  constructor() {
    super('dildo');
  }

  //#region contextual accessors
  isSquirter(): boolean {
    return !!this.cum();
  }
  //#endregion

  //#region penetrator's accessors
  cum(): Cum {
    return this.cum();
  }

  setCum(cum: Cum): this {
    this.setCum(cum);
    return this;
  }

  isVibrator(): boolean {
    return this._isVibrator;
  }

  setIsVibrator(isVibrator: boolean): this {
    this._isVibrator = isVibrator;
    return this;
  }
  //#endregion
}
