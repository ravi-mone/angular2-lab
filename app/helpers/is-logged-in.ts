import {Injector} from 'angular2/core';
import {appInjector} from './app-injector';
import {Auth} from '../services/auth/auth';
import {Router, RouteParams, ComponentInstruction} from 'angular2/router';

export const isLoggedIn = (next: ComponentInstruction, prev: ComponentInstruction) => {
	let injector: Injector = appInjector();
	let auth: Auth = injector.get(Auth);
	let router: Router = injector.get(Router);
	let params:any = next.params;

  	return auth.check()
  				.then((result) => {
  					if (result) {
  						return true;
  					} else {
  						router.navigate(['/Login', {target: params.target || ''}]);
  						return false;
  					}
  				});
};

export const isAdmin = (target: string) => {
	let injector: Injector = appInjector();
	let auth: Auth = injector.get(Auth);
	let router: Router = injector.get(Router);

  return auth.check()
  				.then((result) => {
  					if (result) {
              //TODO, Need to extend this yet
							/*if (!auth.isAdmin) {
								router.navigateByInstruction(router.generate(['/Restricted']), true);
								return false;
							}
*/
  						return true;
  					} else {
							router.navigate(['/Login', {target}]);
  						return false;
  					}
  				});
};
