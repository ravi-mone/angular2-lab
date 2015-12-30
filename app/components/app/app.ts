import {Component, ViewEncapsulation} from 'angular2/core';
import {enableDebugTools} from 'angular2/platform/browser';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  RouteDefinition,
  RouterOutlet
} from 'angular2/router';
import {LoginCmp}         from '../login/login';
import {AboutCmp}         from '../about/about';
import {NameList}         from '../../services/name_list';
import User               from '../../services/models/user';
import {F1Drivers}        from '../F1Drivers/F1Drivers';
import {Details}          from '../F1Drivers/Details/details';
import {EventsDemo}       from '../Events/events';


@Component({
  selector: 'app',
  viewProviders: [NameList],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/login',         component: LoginCmp,      as: 'Login', useAsDefault:true },
  { path: '/about',         component: AboutCmp,      as: 'About'   },
  { path: '/drivers',       component: F1Drivers,     as: 'drivers' },
  { path: '/details/:name', component: Details,       as: 'details' },
  { path: '/events',        component: EventsDemo,    as: 'events'  }
])


export class AppCmp  {
  constructor(){

  }
}
