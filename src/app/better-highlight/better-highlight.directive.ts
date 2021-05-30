import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'green';
  @HostBinding('style.backgroundColor') bkgrndColor: string = this.defaultColor;

  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    this.bkgrndColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.bkgrndColor = this.defaultColor;
  }

}
