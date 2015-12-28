var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var LoginComp = (function () {
    function LoginComp(builder) {
        this.loginForm = builder.group({
            login: ["", core_1.Validators.required],
            passwordRetry: builder.group({
                password: ["", core_1.Validators.required],
                passwordConfirmation: ["", core_1.Validators.required]
            })
        });
    }
    LoginComp = __decorate([
        core_1.Component({
            selector: 'login-comp',
            viewBindings: [core_1.FormBuilder]
        }),
        core_1.View({
            template: "\n    <form [control-group]=\"loginForm\">\n      Login <input control=\"login\">\n      <div control-group=\"passwordRetry\">\n        Password <input type=\"password\" control=\"password\">\n        Confirm password <input type=\"password\" control=\"passwordConfirmation\">\n      </div>\n    </form>\n  ",
            directives: [core_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.FormBuilder !== 'undefined' && core_1.FormBuilder) === 'function' && _a) || Object])
    ], LoginComp);
    return LoginComp;
    var _a;
})();
//# sourceMappingURL=forms.js.map