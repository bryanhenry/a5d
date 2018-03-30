/**
 * src/resolvers/query/getGame.ts
 *
 * Get answers for the current game.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 *
 */

import { GameManager } from '../../components/games/GameManager';

/**
 * Graphql resolver for retrieving  a game.
 *
 * @param op
 * @param {object} context
 * @returns {Promise<any>}
 */
export const getGame = async (op, context) : Promise<any> => {

  let { id } = context;

  return GameManager.getCurrentGame(id);

};
