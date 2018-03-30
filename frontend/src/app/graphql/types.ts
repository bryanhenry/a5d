/**
 * src/app/graphql/types.ts
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @license MIT
 */

import {Result, allGames} from '../../../../backend/src/resolvers/graphql';

export type scoreBoard = {
  gameNumber: string;
  lastNumber: string;
  rounds: Result[]
};

export type Query = {
  getGame: scoreBoard;
  getAllGames: allGames;
};
