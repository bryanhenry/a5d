"use strict";
/**
 * src/messages/resolvers/query/index.ts
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
var getGame_1 = require("./getGame");
var getAllGames_1 = require("./getAllGames");
exports.default = {
    getGame: getGame_1.getGame,
    getAllGames: getAllGames_1.getAllGames,
};
