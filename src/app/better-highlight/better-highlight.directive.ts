import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') bkgrndColor: string = 'transparent';

  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    this.bkgrndColor = 'green';
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.bkgrndColor = 'transparent';
  }

}
