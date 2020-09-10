import { BaseCovering } from '../BaseCovering';

export class BaseLiquid extends BaseCovering {

  private _taste = '';

  constructor(name: string, colors: string[] = []) {
    super(name, colors);
  }

  //#region accessors
  taste(): string {
    return this._taste;
  }

  setTaste(taste: string): this {
    this._taste = taste;
    return this;
  }
  //#endregion
}
