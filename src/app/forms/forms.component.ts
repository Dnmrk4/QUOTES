import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { Quote } from '@angular/compiler';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  newQuote = new Quotes(0, '', '', '', new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quotes>();

  submitpost() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quotes(0, '', '', '', new Date(), 0, 0);
  }

  constructor() { }

  ngOnInit() {
  }

}
