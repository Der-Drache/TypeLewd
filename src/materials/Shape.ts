import { Size } from './Size';

export class Shape {

  private _width: Size;
  private _height: Size;
  private _length: Size;

  constructor(width?: number | Size, height?: number | Size, length?: number | Size) {
    this.setWidth(width);
    this.setHeight(height);
    this.setLength(length);
  }

  //#region processing
  protected getSize(dirtySize: number | Size): Size {
    return dirtySize
      ? typeof dirtySize === 'number'
        ? new Size(dirtySize)
        : dirtySize
      : new Size(0);
  }

  isSmallerThan(shape: Shape): boolean {
    return (
      this.width().centimeters() < shape.width().centimeters() &&
      this.height().centimeters() < shape.height().centimeters() &&
      this.length().centimeters() < shape.length().centimeters()
    );
  }

  isBiggerThan(shape: Shape): boolean {
    return shape.isSmallerThan(this);
  }

  isEqualTo(shape: Shape): boolean {
    return !this.isSmallerThan(shape) && !this.isBiggerThan(shape);
  }
  //#endregion

  //#region accessors
  width(): Size {
    return this._width;
  }

  setWidth(width: number | Size): this {
    this._width = this.getSize(width);
    return this;
  }

  height(): Size {
    return this._height;
  }

  setHeight(height: number | Size): this {
    this._height = this.getSize(height);
    return this;
  }

  length(): Size {
    return this._length;
  }

  setLength(length: number | Size): this {
    this._length = this.getSize(length);
    return this;
  }
  //#endregion
}
