import { Solid, IPenetrator } from '.';

export interface IPenetrable extends Solid {
  pushPenetrator(penetrator: IPenetrator): this;
  pushLiquid(liquid: any): this;


  penetrators(): IPenetrator[];
  setPenetrators(penetrators: IPenetrator[]): this;
  liquids(): any[];
  setLiquids(liquids: any[]): this;
}

export class Penetrable extends Solid implements IPenetrable {

  private _penetrators: IPenetrator[] = [];
  // TODO
  private _liquids: any[] = [];

  constructor(name: string) {
    super(name);
  }

  //#region processing
  pushPenetrator(penetrator: IPenetrator): this {
    this._penetrators.push(penetrator);
    return this;
  }

  pushLiquid(liquid: string): this {
    this._liquids.push(liquid);
    return this;
  }
  //#endregion

  //#region accessors
  penetrators(): IPenetrator[] {
    return this._penetrators;
  }

  setPenetrators(penetrators: IPenetrator[]): this {
    this._penetrators = penetrators;
    return this;
  }

  liquids(): any[] {
    return this._liquids;
  }

  setLiquids(liquids: any[]): this {
    this._liquids = liquids;
    return this;
  }
  //#endregion
}
