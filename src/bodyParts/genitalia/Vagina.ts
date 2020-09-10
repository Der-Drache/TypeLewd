import { BaseSlit } from './BaseSlit';
import { BaseBeing } from '../../beings/BaseBeing';

export class Vagina extends BaseSlit {

  constructor(being?: BaseBeing) {
    super('vagina', being);

    this.setIsPenetrable(true);
  }
}
