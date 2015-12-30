import {Component, ViewEncapsulation, Input, Directive, ElementRef}     from 'angular2/core';
import {Router}                                                         from 'angular2/router';
import {HTTP_REQUEST_PROVIDER}                                                        from '../Request/Request';
import User                                                             from '../../services/models/user';

@Directive({
  selector: '[mdlUpgrade]'
})
class MdlUpgradeDirective {
  @Input() mglUpgrade;

  constructor(el: ElementRef) {
    componentHandler.upgradeElement(el.nativeElement);
  }
}


@Component({
  selector: 'login',
  templateUrl: './components/login/login.html',
  encapsulation:ViewEncapsulation.None,
  providers: [HTTP_REQUEST_PROVIDER, User],
  directives: [MdlUpgradeDirective]
})
export class LoginCmp {
  username= 'BNT2010';
  password = 'bnt2010';
  showError= false;

  constructor(public user:User, private _router: Router, public authenticator : HTTP_REQUEST_PROVIDER){

  }

  //This function is called when the user clicks on the submit button
  subitForm() {
    try {
      this.authenticator.login('GET', '568142e2120000960993a242',
        {username: this.username, password: this.password})
        .then(() => {

          this._router.navigate(['/About']);
        })
        .catch((e) => {
          this.showError = true;
        });
    }catch(e){
      console.log(e)
    }
  }
}
