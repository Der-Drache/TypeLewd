import { Balls, Penis } from '.';
import { BasePenisSlit } from './BasePenisSlit';
import { BaseBeing } from '../../beings/BaseBeing';

export class Slit extends BasePenisSlit {

  constructor(penises: Penis[] = [], being?: BaseBeing) {
    super('slit', being, penises);
  }
}
