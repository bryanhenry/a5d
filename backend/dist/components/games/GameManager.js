"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Games_1 = require("../../models/entity/Games");
var uuid_1 = require("uuid");
var GameManager = /** @class */ (function () {
    function GameManager() {
    }
    /**
     * Get the current game by id, if no id is specified, return a new game.
     *
     * @param {string} id
     * @returns {GamesInterface}
     */
    GameManager.getCurrentGame = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var storedGame, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storedGame = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, GameManager.getGame(id)];
                    case 2:
                        storedGame = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        return [4 /*yield*/, GameManager.createNewGame()];
                    case 4:
                        storedGame = _a.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, storedGame];
                }
            });
        });
    };
    /**
     * Gets a game by id.
     *
     * @param {string} id
     * @returns {GamesInterface}
     */
    GameManager.getGame = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var storedGame;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (id === undefined) {
                            throw new Error("No game id provided");
                        }
                        return [4 /*yield*/, Games_1.default.findOne({ gameNumber: id })];
                    case 1:
                        storedGame = _a.sent();
                        if (storedGame === null) {
                            throw new Error("Game " + id + " not found");
                        }
                        return [2 /*return*/, storedGame];
                }
            });
        });
    };
    /**
     * Get all games.
     *
     * @returns {Promise<GamesInterface[]>}
     */
    GameManager.getAllGames = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Games_1.default.find({})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Generate a new game.
     *
     * @returns {GamesInterface}
     */
    GameManager.createNewGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newGame;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newGame = new Games_1.default();
                        newGame.gameNumber = uuid_1.v4();
                        newGame.lastNumber = 1;
                        newGame.rounds = [];
                        return [4 /*yield*/, newGame.save()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, newGame];
                }
            });
        });
    };
    /**
     * Enter an answer to a game.
     *
     * @param {string} gameId
     * @param {string} answer
     * @returns {GamesInterface}
     */
    GameManager.enterAnswer = function (gameId, answer) {
        return __awaiter(this, void 0, void 0, function () {
            var game, result, seriesNextNumber, seriesTargetName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, GameManager.getGame(gameId)];
                    case 1:
                        game = _a.sent();
                        result = { answer: answer, result: false };
                        seriesNextNumber = (game.lastNumber + 1);
                        seriesTargetName = GameManager.stringify(seriesNextNumber);
                        if (answer === null || answer.length === 0) {
                            result.result = false;
                        }
                        else if (seriesTargetName.toLowerCase().length !== 0 && seriesTargetName.toLowerCase() === answer.toLowerCase()) {
                            result.result = true;
                        }
                        else if (parseInt(answer, 0) === seriesNextNumber && seriesTargetName.toLowerCase().length === 0) {
                            result.result = true;
                        }
                        game.rounds.push(result);
                        if (result.result) {
                            game.lastNumber = seriesNextNumber;
                        }
                        return [4 /*yield*/, game.save()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Transliterate target number into fizzbuzz string.
     * @param {number} target
     */
    GameManager.stringify = function (target) {
        var transliterate = '';
        if ((target % 15) === 0) {
            transliterate = 'FizzBuzz';
        }
        else if ((target % 3) === 0) {
            transliterate = 'Fizz';
        }
        else if ((target % 5) === 0) {
            transliterate = 'Buzz';
        }
        return transliterate;
    };
    return GameManager;
}());
exports.GameManager = GameManager;
