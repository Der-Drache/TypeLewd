import { BaseBodyPart } from './BaseBodyPart';
import { BaseBeing } from '../beings/BaseBeing';

export class Claw extends BaseBodyPart {

  constructor(being?: BaseBeing) {
    super('claw', being);

    this.isPenetrator();
  }
}
