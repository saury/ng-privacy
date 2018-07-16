import { Directive, ElementRef, OnDestroy } from '@angular/core';
const BScroll = require('better-scroll').default;

interface OnChanges {
  ngOnChanges(changes): any;
}

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnChanges, OnDestroy {
  scroll;

  constructor(el: ElementRef) {
    setTimeout(() => {
      this.scroll = new BScroll(el.nativeElement, {
        mouseWheel: true,
        scrollbar: {
          fade: true,
          interactive: true,
        },
      });
    });
   }

   ngOnChanges() {
     console.log(this.scroll);
    //  this.scroll.refresh();
   }

   ngOnDestroy() {
    this.scroll.destroy();
   }

}
