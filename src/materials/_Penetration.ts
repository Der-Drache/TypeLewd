import { IPenetrator } from '.';
import { IPenetrable } from './Penetrable';

export interface IPenetrationMetadataPenetratorSizes {
  isSameSizeHasPrevious: boolean;
  isTooBig: boolean;
}

export interface IPenetrationMetadataPenetrator {
  sizeX: IPenetrationMetadataPenetratorSizes;
  sizeY: IPenetrationMetadataPenetratorSizes;
  sizeZ: IPenetrationMetadataPenetratorSizes;
}

export interface IPenetrationMetadata {
  penetrator: IPenetrationMetadataPenetrator;
}

export class Penetration {

  private _startedOn: Date;
  private _finishedOn: Date;
  private _penetrator: IPenetrator;
  private _penetrable: IPenetrable;
  metadata: IPenetrationMetadata = {
    penetrator: {
      sizeX: {
        isSameSizeHasPrevious: false,
        isTooBig: false,
      },
      sizeY: {
        isSameSizeHasPrevious: false,
        isTooBig: false,
      },
      sizeZ: {
        isSameSizeHasPrevious: false,
        isTooBig: false,
      },
    },
  }

  //#region accessors
  startedOn(): Date {
    return this._startedOn;
  }

  setStartedOn(startedOn: Date): this {
    this._startedOn = startedOn;
    return this;
  }

  finishedOn(): Date {
    return this._finishedOn;
  }

  setFinishedOn(finishedOn: Date): this {
    this._finishedOn = finishedOn;
    return this;
  }

  penetrator(): IPenetrator {
    return this._penetrator;
  }

  setPenetrator(penetrator: IPenetrator): this {
    this._penetrator = penetrator;
    return this;
  }

  penetrable(): IPenetrable {
    return this._penetrable;
  }

  setPenetrable(penetrable: IPenetrable): this {
    this._penetrable = penetrable;
    return this;
  }
  //#endregion
}
