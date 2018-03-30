/**
 * src/resolvers/index.ts
 *
 * graphql resolvers.
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 *
 */

import query from './query';
import mutations from './mutations';

export const resolvers = {
  Query: query,
  Mutation: mutations,
};
