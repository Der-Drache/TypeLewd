import { Size } from './Size';

export class Shape {

  private _x: Size;
  private _y: Size;
  private _z: Size;

  constructor(x?: number | Size, y?: number | Size, z?: number | Size) {
    this.setX(x);
    this.setY(y);
    this.setZ(z);
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
      this.x().centimeters() < shape.x().centimeters() &&
      this.y().centimeters() < shape.y().centimeters() &&
      this.z().centimeters() < shape.z().centimeters()
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
  x(): Size {
    return this._x;
  }

  setX(x: number | Size): this {
    this._x = this.getSize(x);
    return this;
  }

  y(): Size {
    return this._y;
  }

  setY(y: number | Size): this {
    this._y = this.getSize(y);
    return this;
  }

  z(): Size {
    return this._z;
  }

  setZ(z: number | Size): this {
    this._z = this.getSize(z);
    return this;
  }
  //#endregion
}
