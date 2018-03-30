/**
 * src/models/schema/GameSchema.ts
 *
 * Define the interface for a game model.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 */

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const GameSchema = new Schema({
  gameNumber: {
    type: String,
    required: true,
  },
  lastNumber: {
    type: Number,
    required: true,
  },
  rounds: [{ answer: String, result: Boolean }]},
                          { timestamps: true });


