import { LengthUnits } from '../data';

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

  //#region accessors
  size(unit?: LengthUnits): number {
    let operationType = '';
    let coefficient = 0;
    const thisUnit = this.unit();

    if (thisUnit === LengthUnits.centimeter && unit === LengthUnits.meter) {
      operationType = 'divide';
      coefficient = 100;
    } else if (thisUnit === LengthUnits.foot && unit === LengthUnits.meter) {
      operationType = 'divide';
      coefficient = 3.281;
    } else if (thisUnit === LengthUnits.foot && unit === LengthUnits.meter) {
      operationType = 'divide';
      coefficient = 39.37;
    } else if (thisUnit === LengthUnits.meter && unit === LengthUnits.foot) {
      operationType = 'multiply';
      coefficient = 3.281;
    } else if (thisUnit === LengthUnits.inch && unit === LengthUnits.foot) {
      operationType = 'divide';
      coefficient = 12;
    } else if (thisUnit === LengthUnits.centimeter && unit === LengthUnits.foot) {
      operationType = 'divide';
      coefficient = 30.48;
    } else if (thisUnit === LengthUnits.meter && unit === LengthUnits.inch) {
      operationType = 'multiply';
      coefficient = 39.37;
    } else if (thisUnit === LengthUnits.foot && unit === LengthUnits.inch) {
      operationType = 'multiply';
      coefficient = 12;
    } else if (thisUnit === LengthUnits.centimeter && unit === LengthUnits.inch) {
      operationType = 'divide';
      coefficient = 2.54;
    } else if (thisUnit === LengthUnits.meter && unit === LengthUnits.centimeter) {
      operationType = 'multiply';
      coefficient = 100;
    } else if (thisUnit === LengthUnits.foot && unit === LengthUnits.centimeter) {
      operationType = 'multiply';
      coefficient = 30.48;
    } else if (thisUnit === LengthUnits.inch && unit === LengthUnits.centimeter) {
      operationType = 'multiply';
      coefficient = 2.54;
    }

    if (operationType === 'multiply') {
      return this.size() * coefficient;
    } else if (operationType === 'divide') {
      return this.size() / coefficient;
    }
    return this._size;
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
