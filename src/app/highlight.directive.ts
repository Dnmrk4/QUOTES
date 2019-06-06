import { Directive, Input } from '@angular/core';
import { Quote } from '@angular/compiler';

@Directive( {
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() quote: Quote;

}
