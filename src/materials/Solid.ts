import { Shape } from '.';
import { BaseMaterial } from './BaseMaterial';
import { IPoint, calculateBezierPoint } from '../utils';

export class Solid extends BaseMaterial {

  private _originalSize: Shape;
  private _currentSize: Shape;
  private _maxSize: Shape;
  private _stretchiness = 0;
  private bezierCurvePoints: IPoint[] = [];

  constructor(name: string) {
    super(name);
  }

  //#region contextual accessors
  size(): Shape {
    return this._originalSize;
  }

  setSize(shape: Shape): this {
    this._currentSize = this._originalSize = this._maxSize = shape;
    return this;
  }
  //#endregion

  //#region accessors
  currentSize(): Shape {
    return this._currentSize;
  }

  setCurrentSize(currentSize: Shape): this {
    this._currentSize = currentSize;

    if (!this.originalSize()) {
      this.setOriginalSize(currentSize);
    }

    return this;
  }

  originalSize(): Shape {
    return this._originalSize;
  }

  setOriginalSize(originalSize: Shape): this {
    this._originalSize = originalSize;

    if (!this.currentSize()) {
      this.setCurrentSize(originalSize);
    }

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
