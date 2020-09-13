import { BaseBodyPart } from './BaseBodyPart';
import { BaseBeing } from '../beings/BaseBeing';
import { IPenetrable, Penetrable, IPenetrator } from '../materials';

export class Maw extends BaseBodyPart implements IPenetrable {

  private penetrable = new Penetrable('maw');

  constructor(being?: BaseBeing) {
    super('maw', being);
  }

  //#region penetrable
  pushPenetrator(penetrator: IPenetrator): this {
    this.penetrable.pushPenetrator(penetrator);
    return this;
  }

  pushLiquid(liquid: any): this {
    this.penetrable.pushLiquid(liquid);
    return this;
  }

  penetrators(): IPenetrator[] {
    return this.penetrable.penetrators();
  }

  setPenetrators(penetrators: IPenetrator[]): this {
    this.penetrable.setPenetrators(penetrators);
    return;
  }

  liquids(): any[] {
    return this.penetrable.liquids();
  }

  setLiquids(liquids: any[]): this {
    this.penetrable.setLiquids(liquids);
    return this;
  }
  //#endregion
}
