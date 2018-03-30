/**
 * src/resolvers/query/newAnswer.ts
 *
 * Enter a new answer.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 *
 */

import { AnswerInput, Result } from '../graphql';
import { GameManager } from '../../components/games/GameManager';

/**
 * Enter a new answer.
 *
 * @param op
 * @param {any} input
 * @returns {Promise<any>}
 */
export const newAnswer = async (op: any, { input }) : Promise<any> => {

  try {

    return await GameManager.enterAnswer(input.gameNumber, input.answer);

  } catch (err) {

    throw Error(err.message);

  }

};
