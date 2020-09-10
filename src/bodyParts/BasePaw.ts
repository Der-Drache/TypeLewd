import { BaseBodyPart } from './BaseBodyPart';
import { Claw } from './Claw';
import { BaseBeing } from '../beings/BaseBeing';

export class BasePaw extends BaseBodyPart {

  private _claws: Claw[] = [];

  constructor(name: string, being?: BaseBeing) {
    super(name, being);

    this.isPenetrator();
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
