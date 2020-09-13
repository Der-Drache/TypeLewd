import { Solid } from '../materials';
import { BaseBodyPart } from '../bodyParts/BaseBodyPart';

export class BaseAccessory extends Solid {

  private _applyableBodyParts: BaseBodyPart[] = [];
  private _appliedTo: BaseBodyPart[] = [];

  constructor(name: string) {
    super(name);
  }

  //#region contextual accessors
  applyableBodyPart(): BaseBodyPart {
    return this._applyableBodyParts[0];
  }

  setApplyableBodyPart(applyableBodyPart: BaseBodyPart): this {
    this._applyableBodyParts = [applyableBodyPart];
    return this;
  }

  /**
   * will apply the `accessory` to the `bodyPart`
   */
  applyTo(bodyPart: BaseBodyPart): this {
    this._appliedTo.push(bodyPart);
    bodyPart.pushAccessory(this);
    return this;
  }

  removeFrom(bodyPart: BaseBodyPart): this {
    this._appliedTo = this._appliedTo.filter(a => !a.compare(bodyPart));
    bodyPart.removeAccessory(this);
    return this;
  }
  //#endregion

  //#region accessors
  applyableBodyParts(): BaseBodyPart[] {
    return this._applyableBodyParts;
  }

  setApplyableBodyParts(applyableBodyParts: BaseBodyPart[]): this {
    this._applyableBodyParts = applyableBodyParts;
    return this;
  }

  appliedTo(): BaseBodyPart[] {
    return this._appliedTo;
  }

  setAppliedTo(bodyParts: BaseBodyPart[]): this {
    this._appliedTo = bodyParts;
    return this;
  }
  //#endregion
}
