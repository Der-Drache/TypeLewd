import { BaseBeing } from './beings/BaseBeing';

export class BeingsGroup<T extends BaseBeing> {

  private _beings: T[] = [];

  constructor(beings: T[] = []) {
    this.setBeings(beings);
  }

  find(iteratee: (being: T, i: Number, source: T[]) => any): T {
    // @ts-ignore
    return this._beings.find(iteratee);
  }

  findByName(name: string): T {
    return this.find(being => being.name() === name);
  }

  slice(start: number, end: number): BeingsGroup<T> {
    return new BeingsGroup<T>(this._beings.slice(start, end));
  }

  push(...beings: T[]): this {
    this._beings.push(...beings);
    return this;
  }

  add(...beings: T[]): this {
    const newBeings = beings.filter(being => !this.includes(being));
    this.push(...newBeings);
    return this;
  }

  includes(being: T): boolean {
    return this._beings.some(b => b.compare(being));
  }

  toArray(): T[] {
    return [...this._beings];
  }

  //#region accessors
  get length() {
    return this.beings.length;
  }

  beings(): T[] {
    return this._beings;
  }

  setBeings(beings: T[]): this {
    this._beings = beings;
    return this;
  }
  //#endregion
}
