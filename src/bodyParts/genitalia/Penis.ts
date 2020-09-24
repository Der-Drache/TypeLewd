import { BaseBodyPart } from '../BaseBodyPart';
import { Cum } from '../../liquids';
import { PenisType } from '../../data';
import { BaseBeing } from '../../beings/BaseBeing';
import { PenisLike, IPenisLike } from '../../materials';

export class Penis extends BaseBodyPart implements IPenisLike {

  private penis = new PenisLike('penis');

  constructor(being?: BaseBeing) {
    super('penis', being);
  }

  //#region accessors
  barbs(): boolean {
    return this.penis.barbs();
  }

  setBarbs(barbs: boolean): this {
    this.penis.setBarbs(barbs);
    return this;
  }

  ridges(): boolean {
    return this.penis.ridges();
  }

  setRidges(ridges: boolean): this {
    this.penis.setRidges(ridges);
    return this;
  }

  knot(): boolean {
    return this.penis.knot();
  }

  setKnot(knot: boolean): this {
    this.penis.setKnot(knot);
    return this;
  }

  type(): PenisType	 {
    return this.penis.type();
  }

  setType(type: PenisType): this {
    this.penis.setType(type);
    return this;
  }

  cum(): Cum {
    return this.penis.cum();
  }

  setCum(cum: Cum): this {
    this.penis.setCum(cum);
    return this;
  }
  //#endregion
}
