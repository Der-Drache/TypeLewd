import { BaseBodyPart } from './BaseBodyPart';
import { BaseBeing } from '../beings/BaseBeing';

export class Body extends BaseBodyPart {

  constructor(being?: BaseBeing) {
    super('body', being);
  }
}
