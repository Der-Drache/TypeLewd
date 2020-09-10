import { BaseMaterial } from './BaseMaterial';
import { BaseBodyPart } from './bodyParts/BaseBodyPart';

export class BaseCovering extends BaseMaterial {

  private _covereds: BaseBodyPart[] = [];

  constructor(name: string, colors: string[] = []) {
    super(name, colors);
  }

  cover(bodyPart: BaseBodyPart): this {
    this._covereds.push(bodyPart);
    bodyPart.pushCovering(this);
    return this;
  }

  covers(bodyParts: BaseBodyPart[]): this {
    bodyParts.forEach(bodyPart => this.cover(bodyPart));
    return this;
  }

  swipeOff(bodyPart: BaseBodyPart): this {
    this._covereds = this._covereds.filter(c => !c.compare(bodyPart));
    bodyPart.removeCovering(this);
    return this;
  }

  swipesOff(bodyParts: BaseBodyPart[]): this {
    bodyParts.forEach(bodyPart => this.swipeOff(bodyPart));
    return this;
  }

  //#region accessors
  covereds(): BaseBodyPart[] {
    return this._covereds;
  }

  setCovereds(covereds: BaseBodyPart[]): this {
    this._covereds = covereds;
    return this;
  }
  //#endregion
}
