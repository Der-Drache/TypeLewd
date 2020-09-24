import { LengthUnits } from '../data';
import { convertLength } from '../utils';

export class Size {

  private _unit: LengthUnits = LengthUnits.centimeter;
  private _size: number;

  constructor(size: number, unit: LengthUnits = LengthUnits.centimeter) {
    this._size = size;
    this._unit = unit;
  }

  //#region processing
  //#endregion

  //#region contextual accessors
  setToMeters(): this {
    this.setSize(this.size(LengthUnits.meter));
    this.setUnit(LengthUnits.meter);
    return this;
  }

  setToCentimeters(): this {
    this.setSize(this.size(LengthUnits.centimeter));
    this.setUnit(LengthUnits.centimeter);
    return this;
  }

  setToFoot(): this {
    this.setSize(this.size(LengthUnits.foot));
    this.setUnit(LengthUnits.foot);
    return this;
  }

  setToInch(): this {
    this.setSize(this.size(LengthUnits.inch));
    this.setUnit(LengthUnits.inch);
    return this;
  }

  meters(): number {
    return this.size(LengthUnits.meter);
  }

  centimeters(): number {
    return this.size(LengthUnits.centimeter);
  }

  feet(): number {
    return this.size(LengthUnits.foot);
  }

  inches(): number {
    return this.size(LengthUnits.inch);
  }
  //#endregion

  testUnit(u: LengthUnits, data: { from: LengthUnits, to: LengthUnits }): boolean {
    return this.unit() === data.from && u === data.to;
  }

  //#region accessors
  size(unit?: LengthUnits): number {
    return unit
      ? convertLength(this._size, { from: this.unit(), to: unit })
      : this._size;
  }

  setSize(size: number): this {
    this._size = size;
    return this;
  }

  unit(): LengthUnits {
    return this._unit;
  }

  setUnit(unit: LengthUnits): this {
    this._unit = unit;
    return this;
  }
  //#endregion
}
