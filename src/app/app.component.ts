import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  joke: string = 'waiting for joke...';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getChuckNorrisJokes();
  }

  getChuckNorrisJokes() {
    setInterval(() => {
    }, 5000)
  }
}
