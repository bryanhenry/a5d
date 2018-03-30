"use strict";
/**
 * src/models/schema/GameSchema.ts
 *
 * Define the interface for a game model.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.GameSchema = new Schema({
    gameNumber: {
        type: String,
        required: true,
    },
    lastNumber: {
        type: Number,
        required: true,
    },
    rounds: [{ answer: String, result: Boolean }]
}, { timestamps: true });
