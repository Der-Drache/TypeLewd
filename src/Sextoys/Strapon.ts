import { Dildo } from './Dildo';
import { Solid } from '../materials';

export class Strapon extends Solid {

  private _penetrator: Dildo;

  constructor(penetrator: Dildo) {
    super('strapon');

    this.setPenetrator(penetrator || new Dildo());
  }

  //#region accessors
  penetrator(): Dildo {
    return this._penetrator;
  }

  setPenetrator(penetrator: Dildo): this {
    this._penetrator = penetrator;
    return this;
  }
  //#endregion
}
