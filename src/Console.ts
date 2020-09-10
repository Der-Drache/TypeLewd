import * as chalk from 'chalk';
import { Chalk } from 'chalk';
import * as util from 'util';

import { Queue } from './Queue';

const defaultProgressionTimeout = 40;

export class Console {

  private static effects: Chalk[] = [];
  private static queue = new Queue();
  private static _progressionTimeout = defaultProgressionTimeout;

  private static format(...messages: unknown[]): string {
    const transformedMessages = messages.map(message => {
      for (const effect of Console.effects) {
        message = effect(message);
      }

      return message;
    });

    Console.effects = [];
    // @ts-ignore
    return util.format(...transformedMessages);
  }

  private static partialWrite(message: string): void {
    process.stdout.write(message);
  }

  private static partialWriteLine(message: string): void {
    console.log(message);
  }

  static write(...messages: unknown[]): typeof Console {
    const message = Console.format(...messages);
    Console.queue.addAndProcess(() => Promise.resolve(
      Console.partialWrite(message)
    ));
    return Console;
  }

  static writeLine(...messages: unknown[]): typeof Console {
    const message = Console.format(...messages);
    Console.queue.addAndProcess(() => Promise.resolve(
      Console.partialWriteLine(message)
    ));
    return Console;
  }

  static writeProgressively(...messages: unknown[]): typeof Console {
    const message = Console.format(...messages);

    Console.queue.addAndProcess(() => new Promise(resolve => {
      for (let i = 0; i < message.length; i++) {
        const last = i === message.length - 1;

        setTimeout(() => {
          Console.partialWrite(message[i]);

          if (last) {
            resolve(null);
          }
        }, i * Console.progressionTimeout());
      }
    }));

    return Console;
  }

  static writeLineProgressively(...messages: unknown[]): typeof Console {
    Console.writeProgressively(...messages, '\n');
    return Console;
  }

  static wait(timeout: number): typeof Console {
    Console.queue.addAndProcess(() => {
      return Promise.resolve(this.queue.setWait(timeout))
    });
    return Console;
  }

  static line(count: number = 1): typeof Console {
    while (count--) {
      Console.writeLine();
    }

    return Console;
  }

  static dots(waitPerDot: number, dotCount: number = 3): typeof Console {
    for (let i = 0; i < dotCount; i++) {
      Console.write('.');

      if (i < dotCount - 1) {
        Console.wait(waitPerDot);
      }
    }

    return Console;
  }

  //#region accessors
  static progressionTimeout(): number {
    return this._progressionTimeout;
  }

  static setProgressionTimeout(timeout: number): typeof Console {
    this._progressionTimeout = timeout;
    return Console;
  }
  //#endregion

  //#region colors
  static get black(): typeof Console {
    Console.effects.push(chalk.black);
    return Console;
  }

  static get red(): typeof Console {
    Console.effects.push(chalk.red);
    return Console;
  }

  static get green(): typeof Console {
    Console.effects.push(chalk.green);
    return Console;
  }

  static get yellow(): typeof Console {
    Console.effects.push(chalk.yellow);
    return Console;
  }

  static get blue(): typeof Console {
    Console.effects.push(chalk.blue);
    return Console;
  }

  static get magenta(): typeof Console {
    Console.effects.push(chalk.magenta);
    return Console;
  }

  static get cyan(): typeof Console {
    Console.effects.push(chalk.cyan);
    return Console;
  }

  static get white(): typeof Console {
    Console.effects.push(chalk.white);
    return Console;
  }

  static get blackBright(): typeof Console {
    Console.effects.push(chalk.blackBright);
    return Console;
  }

  static get redBright(): typeof Console {
    Console.effects.push(chalk.redBright);
    return Console;
  }

  static get greenBright(): typeof Console {
    Console.effects.push(chalk.greenBright);
    return Console;
  }

  static get yellowBright(): typeof Console {
    Console.effects.push(chalk.yellowBright);
    return Console;
  }

  static get blueBright(): typeof Console {
    Console.effects.push(chalk.blueBright);
    return Console;
  }

  static get magentaBright(): typeof Console {
    Console.effects.push(chalk.magentaBright);
    return Console;
  }

  static get cyanBright(): typeof Console {
    Console.effects.push(chalk.cyanBright);
    return Console;
  }

  static get whiteBright(): typeof Console {
    Console.effects.push(chalk.whiteBright);
    return Console;
  }

  static get grey(): typeof Console {
    return Console.blackBright;
  }

  static get gray(): typeof Console {
    return Console.blackBright;
  }
  //#endregion
  //#region background colors
  static get bgBlack(): typeof Console {
    Console.effects.push(chalk.bgBlack);
    return Console;
  }

  static get bgRed(): typeof Console {
    Console.effects.push(chalk.bgRed);
    return Console;
  }

  static get bgGreen(): typeof Console {
    Console.effects.push(chalk.bgGreen);
    return Console;
  }

  static get bgYellow(): typeof Console {
    Console.effects.push(chalk.bgYellow);
    return Console;
  }

  static get bgBlue(): typeof Console {
    Console.effects.push(chalk.bgBlue);
    return Console;
  }

  static get bgMagenta(): typeof Console {
    Console.effects.push(chalk.bgMagenta);
    return Console;
  }

  static get bgCyan(): typeof Console {
    Console.effects.push(chalk.bgCyan);
    return Console;
  }

  static get bgWhite(): typeof Console {
    Console.effects.push(chalk.bgWhite);
    return Console;
  }

  static get bgBlackBright(): typeof Console {
    Console.effects.push(chalk.bgBlackBright);
    return Console;
  }

  static get bgRedBright(): typeof Console {
    Console.effects.push(chalk.bgRedBright);
    return Console;
  }

  static get bgGreenBright(): typeof Console {
    Console.effects.push(chalk.bgGreenBright);
    return Console;
  }

  static get bgYellowBright(): typeof Console {
    Console.effects.push(chalk.bgYellowBright);
    return Console;
  }

  static get bgBlueBright(): typeof Console {
    Console.effects.push(chalk.bgBlueBright);
    return Console;
  }

  static get bgMagentaBright(): typeof Console {
    Console.effects.push(chalk.bgMagentaBright);
    return Console;
  }

  static get bgCyanBright(): typeof Console {
    Console.effects.push(chalk.bgCyanBright);
    return Console;
  }

  static get bgWhiteBright(): typeof Console {
    Console.effects.push(chalk.bgWhiteBright);
    return Console;
  }

  static get bgGrey(): typeof Console {
    return Console.bgBlackBright;
  }

  static get bgGray(): typeof Console {
    return Console.bgBlackBright;
  }
  //#endregion
  //#region effects
  static get reset(): typeof Console {
    Console.effects.push(chalk.reset);
    return Console;
  }

  static get bold(): typeof Console {
    Console.effects.push(chalk.bold);
    return Console;
  }

  static get dim(): typeof Console {
    Console.effects.push(chalk.dim);
    return Console;
  }

  static get italic(): typeof Console {
    Console.effects.push(chalk.italic);
    return Console;
  }

  static get underline(): typeof Console {
    Console.effects.push(chalk.underline);
    return Console;
  }

  static get inverse(): typeof Console {
    Console.effects.push(chalk.inverse);
    return Console;
  }

  static get hidden(): typeof Console {
    Console.effects.push(chalk.hidden);
    return Console;
  }

  static get strikethrough(): typeof Console {
    Console.effects.push(chalk.strikethrough);
    return Console;
  }

  static get visible(): typeof Console {
    Console.effects.push(chalk.visible);
    return Console;
  }
  //#endregion
}
