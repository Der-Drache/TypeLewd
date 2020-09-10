import { BaseBodyPart } from './BaseBodyPart';
import { BaseBeing } from '../beings/BaseBeing';

export class Tail extends BaseBodyPart {

  constructor(being?: BaseBeing) {
    super('tail', being);

    this.setIsPenetrator(true);
  }
}
