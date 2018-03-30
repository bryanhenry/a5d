/**
 * src/index.ts
 *
 * Entry point.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 *
 */

import { config } from './etc/config';
console.log(config);
import * as express from 'express';
import * as bodyParser  from 'body-parser';
import * as cors from 'cors';
import 'reflect-metadata';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
const { makeExecutableSchema } = require('graphql-tools');

import './connectors/mongoose';

import { resolvers } from './resolvers';
import { typeDefs } from './resolvers/graphql';

// Put together a schema
const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = process.env.apiPort || 9999;
//
const app = express();

app.use(cors());
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: executableSchema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // enable graphiql

app.listen(PORT);

console.log(`Listening on ${PORT}`);
