"use strict";
/**
 * src/index.ts
 *
 * Entry point.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./etc/config");
console.log(config_1.config);
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
require("reflect-metadata");
var apollo_server_express_1 = require("apollo-server-express");
var makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
require("./connectors/mongoose");
var resolvers_1 = require("./resolvers");
var graphql_1 = require("./resolvers/graphql");
// Put together a schema
var executableSchema = makeExecutableSchema({
    typeDefs: graphql_1.typeDefs,
    resolvers: resolvers_1.resolvers,
});
var PORT = process.env.apiPort || 9999;
//
var app = express();
app.use(cors());
app.use('/graphql', bodyParser.json(), apollo_server_express_1.graphqlExpress({ schema: executableSchema }));
app.get('/graphiql', apollo_server_express_1.graphiqlExpress({ endpointURL: '/graphql' })); // enable graphiql
app.listen(PORT);
console.log("Listening on " + PORT);
