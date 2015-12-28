import {ComponentRef, PLATFORM_DIRECTIVES, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppCmp} from './components/app/app';
import User from './services/models/user';
import {AutoAuthenticator} from './components/Request/Request';
import {HTTP_PROVIDERS} from 'angular2/http';
import {appInjector} from './components/helpers/app-injector';


bootstrap(AppCmp, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,User,AutoAuthenticator,
  provide('APIEndpoint', {
    useValue: 'http://www.mocky.io/v2/'
  }),
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]).then((appRef: ComponentRef) => {
  appInjector(appRef.injector);
});
