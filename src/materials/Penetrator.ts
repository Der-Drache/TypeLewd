import { Solid } from '.';

export interface IPenetrator extends Solid {

}

export class Penetrator extends Solid implements IPenetrator {

  constructor(name: string) {
    super(name);
  }
}
