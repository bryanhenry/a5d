/**
 * src/models/interfaces/GamesInterface.ts
 *
 * Define the interface for a game model.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 */

import * as mongoose from 'mongoose';
import { RoundInterface } from './RoundInterface';

export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;

export interface GamesInterface extends mongoose.Document {
  gameNumber: string;
  lastNumber: number;
  rounds: RoundInterface[];
}
