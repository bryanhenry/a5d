/**
  * src/components/GameManager.ts
 *
 *  Service abstraction layer to manage games.
 *
 *  @author Bryan Henry <bryanhenry1980@gmail.com>
 *  @license MIT
 */
import { GamesInterface } from '../../models/interfaces/GamesInterface';
import { default as Games } from '../../models/entity/Games';
import { v4 as uuid } from 'uuid';
import { Result } from '../../resolvers/graphql';

export class GameManager {

 /**
  * Get the current game by id, if no id is specified, return a new game.
  *
  * @param {string} id
  * @returns {GamesInterface}
  */
  public static async getCurrentGame(id: string) : Promise<GamesInterface> {

    let storedGame: GamesInterface | null = null;

    try {

      storedGame = await GameManager.getGame(id);

    } catch (err) {

      storedGame = await GameManager.createNewGame();

    }

    return storedGame;

  }

    /**
     * Gets a game by id.
     *
     * @param {string} id
     * @returns {GamesInterface}
     */
  public static async getGame(id: string) : Promise<GamesInterface> {


    if (id === undefined) {
      throw new Error(`No game id provided`);
    }

    const storedGame: GamesInterface | null = await Games.findOne({ gameNumber: id });

    if (storedGame === null) {
      throw new Error(`Game ${id} not found`);
    }

    return storedGame;

  }

    /**
     * Get all games.
     *
     * @returns {Promise<GamesInterface[]>}
     */
  public static async getAllGames() {

    return await Games.find({});

  }

 /**
  * Generate a new game.
  *
  * @returns {GamesInterface}
  */
  private static async createNewGame() : Promise<GamesInterface> {

    const newGame: GamesInterface = new Games();

    newGame.gameNumber = uuid();
    newGame.lastNumber = 1;
    newGame.rounds = [];

    await newGame.save();

    return newGame;

  }

    /**
     * Enter an answer to a game.
     *
     * @param {string} gameId
     * @param {string} answer
     * @returns {GamesInterface}
     */
  public static async enterAnswer(gameId: string, answer: string) : Promise<any> {

    const game: GamesInterface = await GameManager.getGame(gameId);
    const result = <Result> { answer, result: false };

    const seriesNextNumber:number = (game.lastNumber + 1);
    const seriesTargetName:string = GameManager.stringify(seriesNextNumber);

    if (answer === null || answer.length === 0) {

      result.result = false;

    } else if (seriesTargetName.toLowerCase().length !== 0 && seriesTargetName.toLowerCase() === answer.toLowerCase()) {

      result.result = true;

    } else if (parseInt(answer, 0) === seriesNextNumber && seriesTargetName.toLowerCase().length === 0) {

      result.result = true;

    }

    game.rounds.push(result);

    if (result.result) {
      game.lastNumber = seriesNextNumber;
    }

    await game.save();

    return result;

  }

  /**
   * Transliterate target number into fizzbuzz string.
   * @param {number} target
   */
  private static stringify(target: number): string {

    let transliterate = '';

    if ((target % 15) === 0) {

      transliterate = 'FizzBuzz';

    } else if ((target % 3) === 0) {

      transliterate = 'Fizz';

    } else if ((target % 5) === 0) {

      transliterate = 'Buzz';

    }

    return transliterate;

  }

}
