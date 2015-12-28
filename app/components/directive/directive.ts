//Directives allow you to attach behavior to elements in the DOM.
//Directive with an embedded view are called Components :)
/*
* A directive consists of a single directive annotation and a controller class. When the directive's selector matches elements in the DOM, the following steps occur:

 For each directive, the ElementInjector attempts to resolve the directive's constructor arguments.
 Angular instantiates directives for each matched element using ElementInjector in a depth-first order, as declared in the HTML.
 */
import {Directive, ElementRef, EventEmitter, onMouseEnter, onMouseLeave, OnDestroy} from 'angular2/core';
import {Inject} from 'angular2/core';

@Directive({
    selector: '.blink-message',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class ChatBlinkDirective {
  static MARGIN:{init: string, end: string, count:number} = {init: '150px', end: '0', count: 0};
  static TIME_TO_REPEAT:number = 1000;

  constructor(@Inject(ElementRef) private _el:ElementRef) {

  }

  onInit() {
    this._blink();
    console.log('in onlit ');
  }

  OnDestroy() {
    alert(1)
  }

  private _blink():void {
    //   this._el.nativeElement.style.marginLeft = ChatBlinkDirective.MARGIN.init;
    this._el.nativeElement.style.backgroundColor = 'red';

    /*var blink = setTimeout(() => {
     // this._el.nativeElement.style.marginLeft = ChatBlinkDirective.MARGIN.end;
     this._el.nativeElement.style.backgroundColor = 'grey';
     if(ChatBlinkDirective.MARGIN.count==3){
     clearTimeout(blink);
     }else {
     ChatBlinkDirective.MARGIN.count++;
     this._blink();
     }
     }, ChatBlinkDirective.TIME_TO_REPEAT);*/
  }

  onMouseEnter() {
    // exact signature to be determined
    this._el.nativeElement.style.backgroundColor = 'grey';
  }

  onMouseLeave() {
    this._el.nativeElement.style.backgroundColor = 'red';
  }
}
