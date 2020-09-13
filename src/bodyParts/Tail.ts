import { BaseBodyPart } from './BaseBodyPart';
import { BaseBeing } from '../beings/BaseBeing';
import { IPenetrator } from '../materials';

export class Tail extends BaseBodyPart implements IPenetrator {

  constructor(being?: BaseBeing) {
    super('tail', being);
  }
}
