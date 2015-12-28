var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var core_2 = require('angular2/core');
var ChatBlinkDirective = (function () {
    function ChatBlinkDirective(_el) {
        this._el = _el;
    }
    ChatBlinkDirective.prototype.onInit = function () {
        this._blink();
        console.log('in onlit ');
    };
    ChatBlinkDirective.prototype.OnDestroy = function () {
        alert(1);
    };
    ChatBlinkDirective.prototype._blink = function () {
        this._el.nativeElement.style.backgroundColor = 'red';
    };
    ChatBlinkDirective.prototype.onMouseEnter = function () {
        this._el.nativeElement.style.backgroundColor = 'grey';
    };
    ChatBlinkDirective.prototype.onMouseLeave = function () {
        this._el.nativeElement.style.backgroundColor = 'red';
    };
    ChatBlinkDirective.MARGIN = { init: '150px', end: '0', count: 0 };
    ChatBlinkDirective.TIME_TO_REPEAT = 1000;
    ChatBlinkDirective = __decorate([
        core_1.Directive({
            selector: '[blink-message]',
            host: {
                '(mouseenter)': 'onMouseEnter()',
                '(mouseleave)': 'onMouseLeave()'
            }
        }),
        __param(0, core_2.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ChatBlinkDirective);
    return ChatBlinkDirective;
})();
exports.ChatBlinkDirective = ChatBlinkDirective;
//# sourceMappingURL=directive.js.map