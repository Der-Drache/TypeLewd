import { BaseBodyPart } from './BaseBodyPart';
import { Claw } from './Claw';
import { BaseBeing } from '../beings/BaseBeing';
import { IPenetrator } from '../materials';

export class BasePaw extends BaseBodyPart implements IPenetrator {

  private _claws: Claw[] = [];

  constructor(name: string, being?: BaseBeing) {
    super(name, being);
  }

  //#region contextual accessors
  pushClaw(claw: Claw): this {
    this._claws.push(claw);
    return this;
  }

  setClawsFrom(count: number): this {
    for (let i = 0; i < count; i++) {
      this.pushClaw(new Claw(this.being()));
    }

    return this;
  }
  //#endregion

  //#region
  claws(): Claw[] {
    return this._claws;
  }

  setClaws(claws: Claw[]): this {
    this._claws = claws;
    return this;
  }
  //#endregion
}
