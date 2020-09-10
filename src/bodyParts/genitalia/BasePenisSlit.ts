import { Penis } from '.';
import { BaseSlit } from './BaseSlit';
import { BasePenisContainer } from './BasePenisContainer';
import { BaseBeing } from '../../beings/BaseBeing';

export class BasePenisSlit extends BasePenisContainer {

  private _baseSlit: BaseSlit;
  constructor(name: string, being?: BaseBeing, penises: Penis[] = []) {
    super(name, being);

    this._baseSlit = new BaseSlit('base slit', being);
    this.setPenises(penises);
    this.balls().setInternal(true);
  }

  //#region baseSlit's accessors
  vertical(): boolean {
    return this._baseSlit.vertical();
  }

  setVertical(vertical: boolean): this {
    this._baseSlit.setVertical(vertical);
    return this;
  }
  //#endregion
}
