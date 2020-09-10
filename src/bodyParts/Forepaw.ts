import { BasePaw } from './BasePaw';
import { BaseBeing } from '../beings/BaseBeing';

export class Forepaw extends BasePaw {

  constructor(being?: BaseBeing) {
    super('forepaw', being);
  }
}
