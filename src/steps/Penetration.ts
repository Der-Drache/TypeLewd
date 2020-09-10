import { BaseBeing } from '../beings/BaseBeing';
import { IStep } from './IStep';
import { BaseAccessory } from '../accessories/BaseAccessory';
import { BaseBodyPart } from '../bodyParts';
import { pluralizer } from '../utils';
import { Console } from '../Console';

export class Penetration implements IStep {

  private _taker: BaseBeing;
  private _taken: BaseBeing;
  private _hole: BaseBodyPart;
  private _penetrator: BaseBodyPart;
  private _accessory: BaseAccessory;
  private _failed = false;
  private _wait = 0;

  constructor() {

  }

  //#region processing
  execute(): this {
    const taker = this.taker()
    const taken = this.taken()

    const takerName = taker.name();
    const takenName = taken.name();
    const holeName = this.hole().name();
    const takerPossessivePronoun = taker.pronouns().possessive;
    const dirtyPenetratorName = this.penetrator().name()
    const takerPenisCount = taker.penisContainers()[0].count
    const penetratorName = pluralizer(dirtyPenetratorName, takerPenisCount)

    if (this.failed()) {
      Console
        .writeProgressively(
          takerName,
          'is taking',
          takenName.substring(0, 3) + '... '
        )
        .wait(500)
        .writeLineProgressively(
          'What the fuck are you doing with your',
          penetratorName + '?'
        );
    } else {
      Console.writeLineProgressively(
        takerName,
        'is taking',
        `${takenName}'s`,
        holeName,
        'with',
        takerPossessivePronoun,
        `${penetratorName}.`,
      );
    }

    return this;
  }
  //#endregion

  //#region accessors
  taker(): BaseBeing {
    return this._taker;
  }

  setTaker(taker: BaseBeing): this {
    this._taker = taker;
    return this;
  }

  taken(): BaseBeing {
    return this._taken;
  }

  setTaken(taken: BaseBeing): this {
    this._taken = taken;
    return this;
  }

  hole(): BaseBodyPart {
    return this._hole;
  }

  setHole(hole: BaseBodyPart): this {
    this._hole = hole;

    if (!hole.isPenetrable()) {
      this.setFailed(true);
    }

    return this;
  }

  penetrator(): BaseBodyPart {
    return this._penetrator;
  }

  setPenetrator(penetrator: BaseBodyPart): this {
    this._penetrator = penetrator;

    if (!penetrator.isPenetrator()) {
      this.setFailed(true);
    }

    return this;
  }

  accessory(): BaseAccessory {
    return this._accessory;
  }

  setAccessory(accessory: BaseAccessory): this {
    this._accessory = accessory;
    return this;
  }

  wait(): number {
    return this._wait;
  }

  setWait(wait: number): this {
    this._wait = wait;
    return this;
  }

  failed(): boolean {
    return this._failed;
  }

  private setFailed(failed: boolean): this {
    this._failed = failed;
    return this;
  }
  //#endregion
}
