import { BaseBodyPart } from './BaseBodyPart';
import { BaseBeing } from '../beings/BaseBeing';
import { IPenetrator } from '../materials';

export class Claw extends BaseBodyPart implements IPenetrator {

  constructor(being?: BaseBeing) {
    super('claw', being);
  }
}
