import { Component, OnInit, Input } from '@angular/core';
import database from '../../database';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-delete-quote',
  templateUrl: './delete-quote.component.html',
  styleUrls: ['./delete-quote.component.css']
})
export class DeleteQuoteComponent implements OnInit {
  @Input() quote: Quotes;

  delete(id: number) {
    database.forEach((item, index) => {
      if (item.id === id) {
        database.splice(index, 1);
      }
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
