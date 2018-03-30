/**
 * src/app/fizzbuzz/fizzbuzz.component.ts
 *
 * @author Bryan Henry <bryanhenry1980@gmail.com>
 * @license MIT
 *
 */

import { Component, OnInit, Input } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Query } from '../graphql/types';
import {Subscription} from 'apollo-client/util/Observable';
import { gameFocus } from './interfaces/gameFocus';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})

export class FizzbuzzComponent implements OnInit {

  allGames: Subscription;
  currentGame: Subscription;
  gameList: object;
  rounds: object;
  gameFocus: gameFocus;

  @Input() answer: string;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.getAllGames();
  }

  joinGame(id: string, lastNumber: number) {
    this.getGame(id);
  }

  getGame(id: string) {

    this.currentGame = this.apollo.query<Query>({
      query: gql`
        query getGame($gameNumber: String!)
        {
          getGame(id: $gameNumber) {
            gameNumber, lastNumber, rounds {
              answer, result
            }
          }
        }`,
      variables: {
        gameNumber: id
      },
      fetchPolicy: 'network-only',
    }).subscribe(({data, loading}) => {

      this.gameFocus = data.getGame;

    });

  }

  getAllGames() {
    this.allGames = this.apollo.query<Query>({
      query: gql`
        query getAllGames {
          getAllGames {
            games {
              gameNumber, lastNumber
            }
          }
        }`,
      fetchPolicy: 'network-only',
    }).subscribe(({data, loading}) => {
      this.gameList = data.getAllGames.games;
    });
  }

  newGame() {
      this.currentGame = this.apollo.query<Query>({
        query: gql`
          query getGames
          {
            getGame {
              gameNumber, lastNumber, rounds {
                answer, result
              }
            }
          }`,
        fetchPolicy: 'network-only',
      }).subscribe(async ({data, loading}) => {

        await this.getGame(data.getGame.gameNumber);
        await this.getAllGames();
      });



  }

  newAnswer() {

    // early exit.
    if (this.gameFocus === undefined || this.answer === undefined) {
      return false;
    }

    this.apollo.mutate({
      mutation: gql`mutation($gameNumber: String!, $answer: String!) {
        newAnswer(input: { gameNumber: $gameNumber, answer: $answer }) {
          answer,
          result
        }
      }`,
      variables: {
        gameNumber: this.gameFocus.gameNumber,
        answer: this.answer
      }
    }).subscribe(async (data) => {

      await this.getGame(this.gameFocus.gameNumber);
      await this.getAllGames();

    });

  }
}
