export class Queue {

  private queue: (() => any)[] = [];
  private _wait = 0;
  private _timeouts: number[] = [];
  private isProcessing = false;

  //#region processing
  add(func: () => Promise<any>): this {
    this.queue.push(this.processPromisedFunc(func));
    return this;
  }

  addAndProcess(func: () => Promise<any>): this {
    this.add(func);
    this.processQueue();
    return this;
  }

  private processPromisedFunc(func: () => Promise<any>): () => any {
    //const currentQueueLength = this.queue.length;

    return async () => {
      //const timeout = this._timeouts[currentQueueLength];
      this.isProcessing = true;
      await func();

      //console.log(this._timeouts[0])
      setTimeout(() => {
        this.isProcessing = false;
        //this.setWait(0);
        this.processQueue();
      }, this._timeouts.shift() || 0/* || timeout*/);
    }
  }

  processQueue(): void {
    if (this.isProcessing) {
      return;
    }

    const func = this.queue.shift();

    if (func) {
      func();
    }
  }

  pushTimeout(timeout: number): this {
    this._timeouts.push(timeout);
    return this;
  }
  //#endregion

  //#region contextual accessors
  timeout(): number {
    return this._timeouts[0];
  }

  setTimeout(timeout: number): this {
    this._timeouts = [timeout];
    return this;
  }
  //#endregion

  //#region accessors
  timeouts(): number[] {
    return this._timeouts;
  }

  setTimeouts(timeouts: number[]): this {
    this._timeouts = timeouts;
    return this;
  }

  wait(): number {
    return this._wait;
  }

  setWait(wait: number): this {
    this._timeouts.push(wait);
    return this;
  }
  //#endregion
}
