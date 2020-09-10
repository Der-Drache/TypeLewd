import { Penis } from '.';
import { BasePenisContainer } from './BasePenisContainer';
import { BaseBeing } from '../../beings/BaseBeing';

export class Sheath extends BasePenisContainer {

  constructor(penises: Penis[] = [], being?: BaseBeing) {
    super('sheath', being, penises);
  }
}
