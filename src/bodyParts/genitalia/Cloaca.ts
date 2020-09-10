import { BasePenisSlit } from './BasePenisSlit';
import { BaseBeing } from '../../beings/BaseBeing';

export class Cloaca extends BasePenisSlit {

  constructor(being?: BaseBeing) {
    super('cloaca', being);

    this.setVertical(false);
  }
}
