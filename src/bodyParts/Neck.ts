import { BaseBodyPart } from './BaseBodyPart';
import { BaseBeing } from '../beings/BaseBeing';

export class Neck extends BaseBodyPart {

  constructor(being?: BaseBeing) {
    super('neck', being);
  }
}
