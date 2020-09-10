import { BaseMaterial } from '../BaseMaterial';
import { BaseCovering } from '../BaseCovering';
import { BaseAccessory } from '../accessories/BaseAccessory';
import { BaseBeing } from '../beings/BaseBeing';

export class BaseBodyPart extends BaseMaterial {

  private _isPenetrable = false;
  private _isPenetrator = false;
  private _accessories: BaseAccessory[] = [];
  private _coverings: BaseCovering[] = [];
  private _being: BaseBeing;

  constructor(name: string, being: BaseBeing, colors: string[] = []) {
    super(name, colors);

    this._being = being;
  }

  //#region processing
  pushAccessory(accessory: BaseAccessory): this {
    this._accessories.push(accessory);
    return this;
  }

  removeAccessory(accessory: BaseAccessory): this {
    this._accessories = this._accessories.filter(a => !a.compare(accessory));
    return this;
  }

  pushCovering(covering: BaseCovering): this {
    this._coverings.push(covering);
    return this;
  }

  removeCovering(covering: BaseCovering): this {
    this._coverings = this._coverings.filter(c => !c.compare(covering));
    return this;
  }
  //#endregion

  //#region contextual accessors
  covering(): BaseCovering {
    return this._coverings[0];
  }

  setCovering(covering: BaseCovering): this {
    this._coverings = [covering];
    return this;
  }
  //#endregion

  //#region accessors
  isPenetrable(): boolean {
    return this._isPenetrable;
  }

  setIsPenetrable(isPenetrable: boolean): this {
    this._isPenetrable = isPenetrable;
    return this;
  }

  isPenetrator(): boolean {
    return this._isPenetrator;
  }

  setIsPenetrator(isPenetrator: boolean): this {
    this._isPenetrator = isPenetrator;
    return this;
  }

  accessories(): BaseAccessory[] {
    return this._accessories;
  }

  setAccessories(accessories: BaseAccessory[]): this {
    this._accessories = accessories;
    return this;
  }

  coverings(): BaseCovering[] {
    return this._coverings;
  }

  setCoverings(coverings: BaseCovering[]): this {
    this._coverings = coverings;
    return this;
  }

  being(): BaseBeing {
    return this._being;
  }

  setBeing(being: BaseBeing): this {
    this._being = being;
    return this;
  }
  //#endregion
}
