import {OnInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMystyle]'
})
export class MystyleDirective implements OnInit{
  private el:ElementRef;
  @Input() c:string = 'blue';
  @Input() bg:string = '#eef';

  constructor(el:ElementRef) { //这里加入这个引数，spec那里就会出错
    this.el = el;
  }

  ngOnInit(){
    this.el.nativeElement.style.color = this.c;
    this.el.nativeElement.style.backgroundColor = this.bg;
  }
}
