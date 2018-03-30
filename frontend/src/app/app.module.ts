import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';

import { AppComponent } from './app.component';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { LandingComponent } from './landing/landing.component';
import {InMemoryCache} from 'apollo-cache-inmemory';

const appRoutes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'fizz-buzz', component: FizzbuzzComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpLinkModule,
    HttpClientModule,
    ApolloModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({uri: 'http://backend:9999/graphql/'}),
      cache: new InMemoryCache(),

    });
  }
}
