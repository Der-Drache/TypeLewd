import { IBaseStep } from './IBaseStep';
import { IStep } from './IStep';
import { Queue } from '../Queue';

export class Step implements IBaseStep {

  private _steps: IStep[] = [];
  private queue = new Queue();

  constructor() {
    this.queue.setTimeout(500);
  }

  //#region processing
  execute(): this {
    this._steps.forEach(step => {
      this.queue.add(() => Promise.resolve(step.execute()));
    });

    this.queue.processQueue();
    return this;
  }

  pushStep(step: IStep): this {
    this._steps.push(step);
    return this;
  }

  pushTimeout(timeout: number): this {
    this.queue.pushTimeout(timeout);
    return this;
  }
  //#endregion

  //#region contextual accessors
  timeout(): number {
    return this.queue.timeout();
  }

  setTimeout(timeout: number): this {
    this.queue.setTimeout(timeout);
    return this;
  }
  //#endregion

  //#region accessors
  steps(): IStep[] {
    return this._steps;
  }

  setSteps(steps: IStep[]): this {
    this._steps = steps;
    return this;
  }
  //#endregion
}
