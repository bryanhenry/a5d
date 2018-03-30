/**
 * src/resolvers/graphql.ts
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @licence MIT
 */

export const typeDefs = `
type Result {
    answer: String!
    result: Boolean!
}

type scoreBoard {
    _id: String!
    gameNumber: String!
    lastNumber: String!
    rounds: [Result!]
   
}

type allGames {
    games: [scoreBoard]    
}

type Query {
    getGame(id: String): scoreBoard
    getAllGames: allGames!
}

input answerInput {
    gameNumber: String!
    answer: String!
}

type Mutation {
    newAnswer(input: answerInput!) : Result!
}`;

export interface scoreBoard {
  gameNumber: string;
  lastNumber: string;
}

export interface allGames {
  games: scoreBoard[];
}

export interface AnswerInput {
  answer: string;
}

export interface Result {
  answer: string;
  result: boolean;
}
