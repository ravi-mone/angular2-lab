import {Component, ViewEncapsulation, Input, Directive, ElementRef}     from 'angular2/core';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS}                        from 'ng2-material/all';
import {Router}                                                         from 'angular2/router';
import {HTTP_REQUEST_PROVIDER}                                                        from '../Request/Request';
import User                                                             from '../../services/models/user';

//This is the way to make the
/*@Directive({
  selector: '[mdlUpgrade]'
})
class MdlUpgradeDirective {
  @Input() mglUpgrade;

  constructor(el: ElementRef) {
    componentHandler.upgradeElement(el.nativeElement);
  }
}*/


@Component({
  selector: 'login',
  templateUrl: './components/login/login.html',
  providers: [HTTP_REQUEST_PROVIDER, User],
  directives: [/*MdlUpgradeDirective, */ MATERIAL_DIRECTIVES]
})
export class LoginCmp {
  username= '';
  password = '';
  showError= false;

  constructor(public user:User, private _router: Router, public authenticator : HTTP_REQUEST_PROVIDER){

  }

  //This function is called when the user clicks on the submit button
  subitForm() {
    if(this.username != 'demo123' && this.password != 'password'){
      this.showError = true;
      return false;
    }
    try {
      this.authenticator.login('GET', '568142e2120000960993a242',
        {username: this.username, password: this.password})
        .then(() => {

          this._router.navigate(['/About']);
        })
        .catch((e) => {

        });
    }catch(e){
      console.log(e)
    }
  }
}
