import {Component, ViewEncapsulation, AfterContentChecked, } from 'angular2/core';
import {enableDebugTools} from 'angular2/platform/browser';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  RouteDefinition
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';

import {HomeCmp} from '../home/home';
import {AboutCmp} from '../about/about';
import {NameList} from '../../services/name_list';

import User from '../../services/models/user'
import {isEmpty} from "rxjs/operator/isEmpty";

@Component({
  selector: 'login',
  viewProviders: [NameList],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.Emulated,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/login',      component: HomeCmp, name: 'Home', useAsDefault:true },
  { path: '/about', component: AboutCmp, name: 'About' }
])
export class AppCmp  implements AfterContentChecked  {

  userSignedIn=false, user;
  constructor(user:User){
    this.user = user;
  }


  ngAfterContentChecked(){
    if(JSON.parse(localStorage.getItem('pp.user'))){
      this.userSignedIn=true;
    }
  }
}
