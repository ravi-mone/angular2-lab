import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';
@Component({
    selector: 'login-comp',
    viewBindings: [FormBuilder],
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
            login: ['', Validators.required],
            passwordRetry: builder.group({
                password: ['', Validators.required],
                passwordConfirmation: ['', Validators.required]
            })
        });
    }
}
