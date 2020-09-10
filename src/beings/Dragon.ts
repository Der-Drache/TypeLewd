import { BaseBeing } from './BaseBeing';
import {
  Slit,
  Sheath,
  Cloaca,
  Vagina,
  Tailhole,
  Body,
  Forepaw,
  Head,
  Hindpaw,
  Tail,
  Wing,
  Penis,
  Maw,
} from '../bodyParts';
import { getExistingValue } from '../utils';

export class Dragon extends BaseBeing {

  private _slit: Slit;
  private _sheath: Sheath;
  private _cloaca: Cloaca;
  private _vagina: Vagina;
  private _tailhole: Tailhole;
  private _heads: Head[] = [new Head(this)];
  private _body: Body = new Body(this);
  private _forepaws: Forepaw[] = [new Forepaw(this), new Forepaw(this)];
  private _hindpaws: Hindpaw[] = [new Hindpaw(this), new Hindpaw(this)];
  private _wings: Wing[] = [new Wing(this), new Wing(this)];
  private _tails: Tail[] = [new Tail(this)];

  constructor(name: string) {
    super(name);
  }

  getPenisContainer(): Slit | Sheath | Cloaca {
    return getExistingValue([
      this.slit,
      this.sheath,
      this.cloaca,
    ]);
  }


  //#region contextual accessors
  wingless(): this {
    this.setWings([]);
    return this;
  }

  head(): Head {
    return this._heads[0];
  }

  setHead(head: Head): this {
    head.setBeing(this);
    this._heads = [head];
    return this;
  }

  //#region contextual forepaws accessors
  leftForepaw(): Forepaw {
    return this._forepaws[0];
  }

  setLeftForepaw(leftForepaw: Forepaw): this {
    leftForepaw.setBeing(this);
    this._forepaws[0] = leftForepaw;
    return this;
  }

  rightForepaw(): Forepaw {
    return this._forepaws[1];
  }

  setRightForepaw(rightForepaw: Forepaw): this {
    rightForepaw.setBeing(this);
    this._forepaws[1] = rightForepaw;
    return this;
  }

  penises(): Penis[] {
    let penises = [];

    if (this._slit) {
      penises = penises.concat(this._slit.penises());
    }

    if (this._sheath) {
      penises = penises.concat(this._sheath.penises());
    }

    if (this._cloaca) {
      penises = penises.concat(this._cloaca.penises());
    }

    return penises;
  }

  penis(): Penis {
    return this.penises()[0];
  }
  //#endregion

  //#region contextual wings accessors
  leftWing(): Wing {
    return this._wings[0];
  }

  setLeftWing(leftWing: Wing): this {
    leftWing.setBeing(this);
    this._wings[0] = leftWing;
    return this;
  }

  rightWing(): Wing {
    return this._wings[1];
  }

  setRightWing(rightWing: Wing): this {
    rightWing.setBeing(this);
    this._wings[1] = rightWing;
    return this;
  }
  //#endregion

  tail(): Tail {
    return this._tails[0];
  }

  setTail(tail: Tail): this {
    tail.setBeing(this);
    this._tails = [tail];
    return this;
  }
  //#endregion

  //#region accessors
  slit(): Slit {
    return this._slit;
  }

  setSlit(slit: Slit): this {
    slit.setBeing(this);
    this._slit = slit;
    this.pushPenisContainers(slit);
    return this;
  }

  vagina(): Vagina {
    return this._vagina;
  }

  setVagina(vagina: Vagina): this {
    vagina.setBeing(this);
    this._vagina = vagina;
    return this;
  }

  sheath(): Sheath {
    return this._sheath;
  }

  setSheath(sheath: Sheath): this {
    sheath.setBeing(this);
    this._sheath = sheath;
    this.pushPenisContainers(sheath);
    return this;
  }

  cloaca(): Cloaca {
    return this._cloaca;
  }

  setCloaca(cloaca: Cloaca): this {
    cloaca.setBeing(this);
    this._cloaca = cloaca;
    this.pushPenisContainers(cloaca);
    return this;
  }

  tailhole(): Tailhole {
    return this._tailhole;
  }

  setTailhole(tailhole: Tailhole): this {
    tailhole.setBeing(this);
    this._tailhole = tailhole;
    return this;
  }

  heads(): Head[] {
    return this._heads;
  }

  setHeads(heads: Head[]): this {
    heads.forEach(h => h.setBeing(this));
    this._heads = heads;
    return this;
  }

  body(): Body {
    return this._body;
  }

  setBody(body: Body): this {
    body.setBeing(this);
    this._body = body;
    return this;
  }

  forepaws(): Forepaw[] {
    return this._forepaws;
  }

  setForepaws(forepaws: Forepaw[]): this {
    forepaws.forEach(f => f.setBeing(this));
    this._forepaws = forepaws;
    return this;
  }

  hindpaws(): Hindpaw[] {
    return this._hindpaws;
  }

  setHindpaws(hindpaws: Hindpaw[]): this {
    hindpaws.forEach(h => h.setBeing(this));
    this._hindpaws = hindpaws;
    return this;
  }

  wings(): Wing[] {
    return this._wings;
  }

  setWings(wings: Wing[]): this {
    wings.forEach(w => w.setBeing(this));
    this._wings = wings;
    return this;
  }

  tails(): Tail[] {
    return this._tails;
  }

  setTails(tails: Tail[]): this {
    tails.forEach(t => t.setBeing(this));
    this._tails = tails;
    return this;
  }
  //#endregion

  //#region head's accessors
  maw(): Maw {
    return this._heads[0].maw();
  }
  //#endregion
}
