import { IBaseStep } from './IBaseStep';

export interface IStep extends IBaseStep {

  wait(): number;
}
