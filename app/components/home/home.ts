import {Component,ViewEncapsulation, Injector, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {BaseRequestOptions, Request, RequestMethod} from 'angular2/http';
import {Router}              from 'angular2/router';

import {AutoAuthenticator} from '../Request/Request'
import User from '../../services/models/user'

import {Input, Directive, ElementRef} from 'angular2/core';
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
  selector: 'home',
  templateUrl: './components/home/home.html',
  styleUrls: ['./components/home/home.css'],
  encapsulation:ViewEncapsulation.None,
  providers: [AutoAuthenticator, User],
  directives: [MdlUpgradeDirective]
})
export class HomeCmp {
  username= 'BNT2010';
  password = 'bnt2010';
  user=null;
  hideError= true;
  authenticator=null;
  constructor(public user:User, private _router: Router, public authenticator : AutoAuthenticator){
    this.user = user;
    this.authenticator = authenticator;
    console.log('this.authenticator', this.authenticator)
  }

  subitForm() {
    this.hideError = false;
    try {
      this.authenticator.login('POST', '/oauth/token',
        {username: this.username, password: this.password}
      ).subscribe(res => {
        console.log(this.user)
        //URL should have included '?password=123'
        this.user.setUser(res.json());
        this._router.navigate(['About']  /*['HeroDetail', { id: hero.id }]*/);

      });
    }
  }catch(e){
    console.log(e)
  }
}
