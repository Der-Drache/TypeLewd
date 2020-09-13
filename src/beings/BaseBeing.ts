import { SuperBase } from '../SuperBase';
import { BaseBodyPart } from '../bodyParts/BaseBodyPart';
import { BaseAccessory } from '../accessories/BaseAccessory';
import { pronouns, Pronouns, Genders } from '../data';
import { BasePenisContainer } from '../bodyParts/genitalia/BasePenisContainer';
import { BaseAct } from '../acts/BaseAct';
import { Sex } from '../acts';
import { Penetration } from '../steps';
import { IPenetrable } from '../materials';

export class BaseBeing extends SuperBase {

  private _name = '';
  private _gender: Genders = Genders.male;
  private _sexuality = '';
  private _pronouns: Pronouns = pronouns.male;
  private _penisContainers: BasePenisContainer[] = [];
  private _act: BaseAct;
  private _currentPenetration: Penetration;

  constructor(name: string) {
    super();

    this.setName(name);
  }

  //#region act functions
  penetrate(hole: BaseBodyPart & IPenetrable): this {
    const penetration = new Penetration();
    this.setCurrentPenetration(penetration);

    penetration.setTaker(this);
    penetration.setTaken(hole.being());
    penetration.setHole(hole);

    return this;
  }

  withHis(penetrator: BaseBodyPart): this {
    this.currentPenetration().setPenetrator(penetrator);
    this.pushCurrentPenetration();
    return this;
  }

  withHer(penetrator: BaseBodyPart): this {
    return this.withHis(penetrator);
  }

  withTheir(penetrator: BaseBodyPart): this {
    return this.withHis(penetrator);
  }

  using(accessory: BaseAccessory): this {
    this.currentPenetration().setAccessory(accessory);
    return this;
  }

  wait(timeout: number): this {
    this.currentPenetration().setWait(timeout);
    return this;
  }

  protected pushCurrentPenetration(): this {
    this.sexualAct().pushStep(this.currentPenetration());
    return this;
  }

  newAct(act: BaseAct): this {
    act.addBeing(this);
    return this;
  }
  //#endregion

  //#region adders
  pushPenisContainers(penisContainer: BasePenisContainer): this {
    this._penisContainers.push(penisContainer);
    return this;
  }

  sexualAct(): Sex {
    return this._act as Sex;
  }
  //#endregion

  //#region accessors
  name(): string {
    return this._name;
  }

  setName(name: string): this {
    this._name = name;
    return this;
  }

  sexuality(): string {
    return this._sexuality;
  }

  setSexuality(sexuality: string): this {
    this._sexuality = sexuality;
    return this;
  }

  pronouns(): Pronouns {
    return this._pronouns;
  }

  setPronouns(pronouns: Pronouns): this {
    this._pronouns = pronouns;
    return this;
  }

  gender(): Genders {
    return this._gender;
  }

  setGender(gender: Genders): this {
    this._gender = gender;
    this.setPronouns(pronouns[gender]);
    return this;
  }

  penisContainers(): BasePenisContainer[] {
    return this._penisContainers;
  }

  setPenisContainers(penisContainers: BasePenisContainer[]): this {
    this._penisContainers = penisContainers;
    return this;
  }

  act(): BaseAct {
    return this._act;
  }

  setAct(act: BaseAct): this {
    this._act = act;
    return this;
  }

  protected currentPenetration(): Penetration {
    return this._currentPenetration;
  }

  protected setCurrentPenetration(penetration: Penetration): this {
    this._currentPenetration = penetration;
    return this;
  }
  //#endregion
}
