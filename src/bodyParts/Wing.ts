import { BaseBodyPart } from './BaseBodyPart';
import { BaseBeing } from '../beings/BaseBeing';

export class Wing extends BaseBodyPart {

  constructor(being?: BaseBeing) {
    super('wing', being);
  }
}
