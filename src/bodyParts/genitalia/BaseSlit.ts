import { BaseBodyPart } from '../BaseBodyPart';
import { BaseBeing } from '../../beings/BaseBeing';
import { IPenetrable, Penetrable, IPenetrator } from '../../materials';
import { Penetration } from '../../materials/_Penetration';
import { IPoint } from '../../utils';

export class BaseSlit extends BaseBodyPart implements IPenetrable {

  private _vertical = true;
  private penetrable = new Penetrable('base slit');

  constructor(name: string, being?: BaseBeing) {
    super(name, being);
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

  //#region penetrable
  pushPenetrator(penetrator: IPenetrator): this {
    this.penetrable.pushPenetrator(penetrator);
    return this;
  }

  pushLiquid(liquid: any): this {
    this.penetrable.pushLiquid(liquid);
    return this;
  }

  pushPenetration(penetration: Penetration): this {
    this.penetrable.pushPenetration(penetration);
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

  penetrations(): Penetration[] {
    return this.penetrable.penetrations();
  }

  setPenetrations(penetrations: Penetration[]): this {
    this.penetrable.setPenetrations(penetrations);
    return this;
  }

  //#region processing
  lastPenetration(): Penetration {
    return this.penetrable.lastPenetration();
  }

  lastFinishedPenetration(): Penetration {
    return this.penetrable.lastFinishedPenetration();
  }

  getStretchedSizes(): IPoint[] {
    return this.penetrable.getStretchedSizes();
  }
  //#endregion
  //#endregion
}
