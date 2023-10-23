// quote.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Quote {
  sentence: string;
  character: {
    name: string;
  };
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getQuotes(5);
  }

  getQuotes(numberOfQuotes: number): void {
    this.http.get<Quote[]>(`http://localhost:3000/quotes/random/${numberOfQuotes}`)
      .subscribe((data) => {
        this.quotes = data;
        console.log(data);
      });
  }
  refreshQuotes(): void {
    const numberOfQuotes = 5; // You can change this to the desired number of quotes
    this.getQuotes(numberOfQuotes);
  }

}
