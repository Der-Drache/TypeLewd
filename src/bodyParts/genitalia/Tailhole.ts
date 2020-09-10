import { BaseBodyPart } from '../BaseBodyPart';
import { BaseBeing } from '../../beings/BaseBeing';

export class Tailhole extends BaseBodyPart {

  constructor(being?: BaseBeing) {
    super('tailhole', being);

    this.setIsPenetrable(true);
  }
}
