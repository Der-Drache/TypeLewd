import { SuperBase } from '../SuperBase';

export class BaseMaterial extends SuperBase {

  private _colors: string[] = [];
  private _glowings: string[] = [];
  private _iridescents: string[] = [];
  private _name = '';

  constructor(name: string, colors: string[] = []) {
    super();

    this.setName(name);
    this.setColors(colors);
  }

  private getFromColors(colors: '*' | boolean | string[]): string[] {
    if (colors === '*' || colors === true) {
      return this.colors();
    }

    if (colors === false) {
      return [];
    }

    return this.colors().filter(color => {
      // @ts-ignore
      return colors.includes(color)
    });
  }

  //#region adders
  pushColor(color: string): this {
    this._colors.push(color);
    return this;
  }

  pushGlowing(glowing: string): this {
    this._glowings.push(glowing);
    return this;
  }

  pushIridescent(iridescent: string): this {
    this._iridescents.push(iridescent);
    return this;
  }

  addColor(color: string): this {
    // @ts-ignore
    if (!this._colors.includes(color)) {
      this.pushColor(color);
    }

    return this;
  }

  addGlowing(glowing: string): this {
    // @ts-ignore
    if (!this._glowings.includes(glowing)) {
      this.pushGlowing(glowing);
    }

    return this;
  }

  addIridescent(iridescent: string): this {
    // @ts-ignore
    if (!this._iridescents.includes(iridescent)) {
      this.pushIridescent(iridescent);
    }

    return this;
  }
  //#endregion

  //#region contextual accessors
  color(): string {
    return this._colors[0];
  }

  setColor(color: string): this {
    this._colors = [color];
    return this;
  }

  glowing(): string {
    return this._glowings[0];
  }

  setGlowing(glowing: string): this {
    this._glowings = [glowing];
    return this;
  }

  iridescent(): string {
    return this._iridescents[0];
  }

  setIridescent(iridescent: string): this {
    this._iridescents = [iridescent];
    return this;
  }
  //#endregion

  //#region accessors
  colors(): string[] {
    return this._colors;
  }

  setColors(colors: string[]): this {
    this._colors = colors;
    return this;
  }

  glowings(): string[] {
    return this._glowings;
  }

  setGlowings(glowings: '*' | boolean | string[]): this {
    this._glowings = this.getFromColors(glowings);
    return this;
  }

  iridescents(): string[] {
    return this._iridescents;
  }

  setIridescents(iridescents: '*' | boolean | string[]): this {
    this._iridescents = this.getFromColors(iridescents);
    return this;
  }

  name(): string {
    return this._name;
  }

  setName(name: string): this {
    this._name = name;
    return this;
  }
  //#endregion
}
