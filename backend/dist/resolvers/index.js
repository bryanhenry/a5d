"use strict";
/**
 * src/resolvers/index.ts
 *
 * graphql resolvers.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var query_1 = require("./query");
var mutations_1 = require("./mutations");
exports.resolvers = {
    Query: query_1.default,
    Mutation: mutations_1.default,
};
