import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChuckNorrisJokes } from "./ChuckNorrisJokes.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke: string = 'waiting for joke...';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.getChuckNorrisJokes();
    // this.getChuckNorrisJokesAny();
    this.getChuckNorrisJokesInterface();
  }



  // Without setting response type for HttpClient's get method
  getChuckNorrisJokes() {
    setInterval(() => {
      this.httpClient.get('https://api.icndb.com/jokes/random')
      .subscribe(response => this.joke = response['value'].joke);
    }, 5000)
  }




  // Setting response type for HttpClient's get method as ANY
  getChuckNorrisJokesAny() {
    setInterval(() => {
      this.httpClient.get<any>('https://api.icndb.com/jokes/random')
      .subscribe(response => {
        this.joke = response.value.joke;
      });
    }, 5000)
  }

  


  // Setting response type for HttpClient's get method with an interface
  getChuckNorrisJokesInterface() {
    setInterval(() => {
      this.httpClient.get<ChuckNorrisJokes>('https://api.icndb.com/jokes/random')
      .subscribe(response => {
        this.joke = response.value.joke;
      });
    }, 5000)
  }
}


