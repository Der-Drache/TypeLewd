import { BaseBodyPart } from './BaseBodyPart';
import { BaseBeing } from '../beings/BaseBeing';

export class Maw extends BaseBodyPart {

  constructor(being?: BaseBeing) {
    super('maw', being);

    this.setIsPenetrable(true);
  }
}
