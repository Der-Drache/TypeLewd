import { BaseAct } from './BaseAct';
import { IStep } from '../steps/IStep';
import { BeingsGroup } from '../BeingsGroup';
import { Console } from '../Console';
import { Queue } from '../Queue';

export class Sex extends BaseAct {

  private _positionName = '';
  private _subs = new BeingsGroup();
  private _doms = new BeingsGroup();
  private _steps: IStep[] = [];
  private queue = new Queue();

  constructor(positionName: string) {
    super('sex');

    this.setPositionName(positionName);
    //this.queue.setTimeout(1000);
  }

  perform(): this {
    const beings = this.beings().toArray();

    if (beings.length < 2) {
      Console.red.writeLine('Not enough living beings to perform this act');
      return this;
    }

    const lastBeing = beings.pop();
    const beingNames = beings.map(being => being.name());

    Console.writeLineProgressively(
      beingNames.join(', '),
      'and',
      lastBeing.name(),
      `are performing a ${this.positionName()}.`,
    ).line();

    this._steps.forEach(step => {
      this.queue.add(async () => step.execute());

      if (step.wait() > 2500) {
        const waitDot = 400;
        const remainingWait = step.wait() - (waitDot * 2);
        const waitBefore = 500;
        const waitAfter = remainingWait - waitBefore;

        this.queue
          .add(async () => Console.wait(waitBefore))
          .add(async () => Console.dots(waitDot))
          .add(async () => Console.line())
          .add(async () => Console.wait(waitAfter));
      } else {
        this.queue.add(async () => Console.wait(step.wait() || 1000));
      }
    });

    this.queue.processQueue();
    this.clean();
    return this;
  }

  //#region adders
  pushStep(step: IStep): this {
    this._steps.push(step);
    return this;
  }
  //#endregion

  //#region accessors
  positionName(): string {
    return this._positionName;
  }

  setPositionName(positionName: string): this {
    this._positionName = positionName;
    return this;
  }

  subs(): BeingsGroup<any> {
    return this._subs;
  }

  doms(): BeingsGroup<any> {
    return this._doms;
  }
  //#endregion
}
