import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  Router
} from 'angular2/router';
import {LoginCmp}         from '../login/login';
import {AboutCmp}         from '../about/about';
import {Details}          from '../F1Drivers/Details/details';
import {LetsDrive}          from '../LetsDrive/letsDrive';


/*import {LoggedInRouterOutlet}   from '../directive/loggedInOutlet';*/

@Component({
  selector: 'app',
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES/*, LoggedInRouterOutlet*/]
})
@RouteConfig([
  { path: '/login',         component: LoginCmp,      as: 'Login', useAsDefault:true },
  { path: '/about',         component: AboutCmp,      as: 'About'   },
  { path: '/details/:name', component: Details,       as: 'Details' },
  { path: '/letsDrive', component: LetsDrive,       as: 'LetsDrive' }
])


export class AppCmp  {
  constructor(public router: Router) {
  }
}



