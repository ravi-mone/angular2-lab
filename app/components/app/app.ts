import {Component, ViewEncapsulation, AfterContentChecked} from 'angular2/core';
import {enableDebugTools} from 'angular2/platform/browser';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  RouteDefinition,
  RouterOutlet
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';

import {LoginCmp} from '../login/login';
import {AboutCmp} from '../about/about';
import {NameList} from '../../services/name_list';

import User from '../../services/models/user'
import {isEmpty} from "rxjs/operator/isEmpty";

@Component({
  selector: 'app',
  viewProviders: [NameList],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/login',      component: LoginCmp, as: 'Login', useAsDefault:true },
  { path: '/about', component: AboutCmp, as: 'About' }
])
export class AppCmp  implements AfterContentChecked  {

  userSignedIn=false;
  constructor(){

  }


  ngAfterContentChecked(){
    console.log('calling multiple times, This is incorrect :(', this.userSignedIn);
    if(JSON.parse(localStorage.getItem('pp.user'))){
      this.userSignedIn=true;
    }
  }
}
