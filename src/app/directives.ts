import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {
  @HostBinding('class.my-highlight') true;
}