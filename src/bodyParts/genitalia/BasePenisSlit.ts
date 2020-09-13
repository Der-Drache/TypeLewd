import { Penis } from '.';
import { BaseSlit } from './BaseSlit';
import { BasePenisContainer } from './BasePenisContainer';
import { BaseBeing } from '../../beings/BaseBeing';
import { IPenetrable, IPenetrator } from '../../materials';

export class BasePenisSlit extends BasePenisContainer implements IPenetrable {

  private slit: BaseSlit;

  constructor(name: string, being?: BaseBeing, penises: Penis[] = []) {
    super(name, being);

    this.slit = new BaseSlit('base slit', being);
    this.setPenises(penises);
    this.balls().setInternal(true);
  }

  //#region slit's accessors
  vertical(): boolean {
    return this.slit.vertical();
  }

  setVertical(vertical: boolean): this {
    this.slit.setVertical(vertical);
    return this;
  }

  pushPenetrator(penetrator: IPenetrator): this {
    this.slit.pushPenetrator(penetrator);
    return this;
  }

  pushLiquid(liquid: any): this {
    this.slit.pushLiquid(liquid);
    return this;
  }

  penetrators(): IPenetrator[] {
    return this.slit.penetrators();
  }

  setPenetrators(penetrators: IPenetrator[]): this {
    this.slit.setPenetrators(penetrators);
    return;
  }

  liquids(): any[] {
    return this.slit.liquids();
  }

  setLiquids(liquids: any[]): this {
    this.slit.setLiquids(liquids);
    return this;
  }
  //#endregion
}
