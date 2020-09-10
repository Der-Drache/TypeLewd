import { Balls, Penis } from '.';
import { BaseBodyPart } from '../BaseBodyPart';
import { BaseBeing } from '../../beings/BaseBeing';

export class BasePenisContainer extends BaseBodyPart {

  private _penises: Penis[] = [];
  private _balls: Balls;

  constructor(name: string, being?: BaseBeing, penises: Penis[] = []) {
    super(name, being);

    this.setBalls(new Balls(being));
    this.setPenises(penises);
  }

  //#region processing
  pushPenis(penis): this {
    this._penises.push(penis);
    return this;
  }
  //#endregion

  //#region contextual accessors
  penis(): Penis {
    return this._penises[0];
  }

  setPenis(penis: Penis): this {
    this._penises = [penis];
    return this;
  }
  //#endregion

  //#region accessors
  get count(): number {
    return this._penises.length;
  }

  penises(): Penis[] {
    return this._penises;
  }

  setPenises(penises: Penis[]): this {
    this._penises = penises;
    return this;
  }

  balls(): Balls {
    return this._balls;
  }

  setBalls(balls: Balls): this {
    this._balls = balls;
    return this;
  }
  //#endregion

  //#region balls' accessors
  externalBalls(): boolean {
    return this._balls.external();
  }

  setExternalBalls(external: boolean): this {
    this._balls.setExternal(external);
    return this;
  }

  ballsColors(): string[] {
    return this._balls.colors();
  }

  setBallsColors(colors: string[]): this {
    this._balls.setColors(colors);
    return this;
  }

  ballsAmount(): number {
    return this._balls.amount();
  }

  setBallsAmount(amount: number): this {
    this._balls.setAmount(amount);
    return this;
  }

  setBeing(being: BaseBeing): this {
    super.setBeing(being);
    this._balls.setBeing(being);
    this._penises.forEach(p => p.setBeing(being));
    return this;
  }
  //#endregion
}
