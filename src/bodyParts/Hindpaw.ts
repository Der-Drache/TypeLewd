import { BasePaw } from './BasePaw';
import { BaseBeing } from '../beings/BaseBeing';

export class Hindpaw extends BasePaw {

  constructor(being?: BaseBeing) {
    super('hindpaw', being);
  }
}
