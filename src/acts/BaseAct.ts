import { BaseBeing } from '../beings/BaseBeing';
import { BeingsGroup } from '../BeingsGroup';

export class BaseAct {

  private _actName = '';
  private _beings = new BeingsGroup();

  constructor(actName: string) {
    this.setActName(actName);
  }

  //#region processing
  perform(): this {
    throw new Error('The function "perform" needs to be implemented');
  }

  /**
   * clean all beings from this act
   */
  protected clean() {
    this._beings.toArray().forEach(being => {
      being.setAct(null);
    });
  }
  //#endregion

  //#region adders
  addBeing(being: BaseBeing): this {
    this.beings().add(being);
    being.setAct(this);
    return this;
  }
  //#endregion

  //#region accessors
  actName(): string {
    return this._actName;
  }

  private setActName(actName: string): this {
    this._actName = actName;
    return this;
  }

  beings(): BeingsGroup<any> {
    return this._beings;
  }
  //#endregion
}
