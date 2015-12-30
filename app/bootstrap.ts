import {ComponentRef, provide}  from 'angular2/core';
import {bootstrap}              from 'angular2/platform/browser';
import {ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy}         from 'angular2/router';
import {AppCmp}                 from './components/app/app';
import USER_PROVIDER            from './services/models/user';
import {HTTP_REQUEST_PROVIDER}  from './components/Request/Request';
import {HTTP_PROVIDERS}         from 'angular2/http';
import {appInjector}            from './helpers/app-injector';
import {AUTH_PROVIDERS}         from './services/auth/auth';

bootstrap(AppCmp, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  USER_PROVIDER,
  HTTP_REQUEST_PROVIDER,
  AUTH_PROVIDERS,
  provide('APIEndpoint', {
    useValue: 'http://www.mocky.io/v2/'
  }),
  provide(LocationStrategy, {
    useClass: HashLocationStrategy
  })
]).then((appRef: ComponentRef) => {
  appInjector(appRef.injector);
});

