// Directive allows use of the @Directive decorator.
// ElementRef allows access to element in HTML.
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  // Name the attribute.
  selector: '[myHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  // Pass color from 'myHighlight' attribute to 'highlightColor' model.
  @Input('myHighlight') 
  highlightColor: string;

  // Set color on mouse entry. 'red' is the default.
  @HostListener('click') onMouseClick() {
    this.highlight( this.highlightColor || 'red');
  }
 


  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
