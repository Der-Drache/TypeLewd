import { Shape } from '.';
import { BaseMaterial } from './BaseMaterial';

export class Solid extends BaseMaterial {

  private _minSize: Shape;
  private _originalSize: Shape;
  private _maxSize: Shape;
  private _stretchiness = 0;

  constructor(name: string) {
    super(name);
  }

  //#region contextual accessors
  size(): Shape {
    return this._originalSize;
  }

  setSize(shape: Shape): this {
    this._minSize = this._originalSize = this._maxSize = shape;
    return this;
  }
  //#endregion

  //#region accessors
  minSize(): Shape {
    return this._minSize;
  }

  setMinSize(minSize: Shape): this {
    this._minSize = minSize;
    return this;
  }

  originalSize(): Shape {
    return this._originalSize;
  }

  setOriginalSize(originalSize: Shape): this {
    this._originalSize = originalSize;
    return this;
  }

  maxSize(): Shape {
    return this._maxSize;
  }

  setMaxSize(maxSize: Shape): this {
    this._maxSize = maxSize;
    return this;
  }

  stretchiness(): number {
    return this._stretchiness;
  }

  setStretchiness(stretchiness: number): this {
    this._stretchiness = stretchiness;
    return this;
  }
  //#endregion
}
