"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * src/models/entity/Games.ts
 *
 * Model for games.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 */
var mongoose = require("mongoose");
var GameSchema_1 = require("../schema/GameSchema");
exports.default = mongoose.model('Games', GameSchema_1.GameSchema);
