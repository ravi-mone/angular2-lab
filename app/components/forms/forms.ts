import {Component, View, bootstrap, FormBuilder, Validators, FORM_DIRECTIVES, ControlGroup} from 'angular2/core';
//import {FormBuilder, Validators, FORM_DIRECTIVES, ControlGroup} from 'angular2/core';
@Component({
    selector: 'login-comp',
    viewBindings: [FormBuilder]
})
@View({
    template: `
    <form [control-group]="loginForm">
      Login <input control="login">
      <div control-group="passwordRetry">
        Password <input type="password" control="password">
        Confirm password <input type="password" control="passwordConfirmation">
      </div>
    </form>
  `,
    directives: [FORM_DIRECTIVES]
})
class LoginComp {
    loginForm: ControlGroup;
    constructor(builder: FormBuilder) {
        this.loginForm = builder.group({
            login: ["", Validators.required],
            passwordRetry: builder.group({
                password: ["", Validators.required],
                passwordConfirmation: ["", Validators.required]
            })
        });
    }
}

/*
import {Component, View, bootstrap, FormBuilder,
    Validators, FORM_DIRECTIVES, ControlGroup} from 'angular2/core';

@Component({
    selector: 'hello',
    viewBindings: [FormBuilder]
})
@View({
    template: `
    <form [ng-form-model]="loginForm">
      Login <input ng-control="login">
      <div ng-control-group="passwordRetry">
        Password <input type="password" ng-control="password">
        Confirm password <input type="text" ng-control="passwordConfirmation">
      </div>
    </form>

    <pre>{{loginForm.value | json}}</pre>
  `,
    directives: [FORM_DIRECTIVES]
})
class LoginComp {
    loginForm: ControlGroup;
    constructor(builder: FormBuilder) {
        this.loginForm = builder.group({
            login: ["", Validators.required],
            passwordRetry: builder.group({
                password: ["", Validators.required],
                passwordConfirmation: ["", Validators.required]
            })
        });
    }
}

bootstrap(LoginComp);
    */
