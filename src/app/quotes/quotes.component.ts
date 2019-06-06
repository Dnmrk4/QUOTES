import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import data from '../../database';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  get quotes() {
    return data.map(quote => new Quotes(
      quote.id, quote.title, quote.author, quote.poster, quote.postTime, quote.upvote, quote.downvote
    ));
  }

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.postTime = new Date(quote.postTime);
    data.unshift(quote);
  }

  constructor() { }

  ngOnInit() {
  }

}
