import { Component, OnInit, Input } from '@angular/core';
import database from '../../database';
import { Quote } from '@angular/compiler';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  @Input() quote: Quotes;

  constructor() { }

  upvote(id: number) {
    database.forEach(quote => {
      if (quote.id === id) {
        quote.upvote = quote.upvote + 1;
      }
    });
  }

  downvote(id: number) {
    database.forEach(quote => {
      if (quote.id === id) {
        quote.downvote = quote.downvote + 1;
      }
    });
  }

  ngOnInit() {
  }

}
