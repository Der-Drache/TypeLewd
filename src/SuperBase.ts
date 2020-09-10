import { v4 } from 'uuid';

export class SuperBase {

  private _uuid = v4();

  constructor() {

  }

  uuid(): string {
    return this._uuid;
  }

  compare(value: SuperBase): boolean {
    return this.uuid() === value.uuid();
  }
}
