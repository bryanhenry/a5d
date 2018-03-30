/**
 * src/resolvers/query/getAllGames.ts
 *
 * Get all games.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 *
 */

import { GameManager } from '../../components/games/GameManager';
import { allGames} from '../graphql';

/**
 * Graphql resolver for retrieving  a game.
 *
 * @param op
 * @param {object} context
 * @returns {Promise<any>}
 */
export const getAllGames = async (op, context: object) : Promise<any> => {

  return { games: await GameManager.getAllGames() };

};
