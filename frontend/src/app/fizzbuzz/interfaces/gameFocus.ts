/**
  * src/app/fizzbuzz/interfaces/gameFocus.ts
  *
  * @author Bryan Henry <bryanhenry1980@gmail.com>
  * @license MIT
  *
  */

import { RoundInterface } from '../../../../../backend/src/models/interfaces/RoundInterface';

export interface gameFocus {

  gameNumber: string;
  lastNumber: string;
  rounds: RoundInterface[];

}
