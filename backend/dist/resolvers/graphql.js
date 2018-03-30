"use strict";
/**
 * src/resolvers/graphql.ts
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = "\ntype Result {\n    answer: String!\n    result: Boolean!\n}\n\ntype scoreBoard {\n    _id: String!\n    gameNumber: String!\n    lastNumber: String!\n    rounds: [Result!]\n   \n}\n\ntype allGames {\n    games: [scoreBoard]    \n}\n\ntype Query {\n    getGame(id: String): scoreBoard\n    getAllGames: allGames!\n}\n\ninput answerInput {\n    gameNumber: String!\n    answer: String!\n}\n\ntype Mutation {\n    newAnswer(input: answerInput!) : Result!\n}";
