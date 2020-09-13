import { IPenetrator } from '../materials';

export class Penetration {

  private _startedOn: Date;
  private _duration: Date;
  private _penetrator: IPenetrator;

  //#region accessors
  startedOn(): Date {
    return this._startedOn;
  }

  setStartedOn(startedOn: Date): this {
    this._startedOn = startedOn;
    return this;
  }

  duration(): Date {
    return this._duration;
  }

  setDuration(duration: Date): this {
    this._duration = duration;
    return this;
  }

  penetrators(): IPenetrator {
    return this._penetrator;
  }

  setPenetrators(penetrator: IPenetrator): this {
    this._penetrator = penetrator;
    return this;
  }
  //#endregion
}
