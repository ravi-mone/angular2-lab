import {Component, ViewEncapsulation, EventEmitter, Directive} from 'angular2/core';
import {enableDebugTools} from 'angular2/platform/browser';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  RouteDefinition,
  RouterOutlet,
  Router
} from 'angular2/router';
import {LoginCmp}         from '../login/login';
import {AboutCmp}         from '../about/about';
import User               from '../../services/models/user';
import {F1Drivers}        from '../F1Drivers/F1Drivers';
import {Details}          from '../F1Drivers/Details/details';
import {EventsDemo}       from '../Events/events';
import {LoggedInRouterOutlet}   from '../directive/loggedInOutlet'

@Component({
  selector: 'app',
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, LoggedInRouterOutlet]
})
@RouteConfig([
  { path: '/login',         component: LoginCmp,      as: 'Login', useAsDefault:true },
  { path: '/about',         component: AboutCmp,      as: 'About'   },
  { path: '/details/:name', component: Details,       as: 'Details' }
])


export class AppCmp  {
  constructor(public router: Router) {
  }
}



