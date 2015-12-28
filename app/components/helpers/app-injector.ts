import {Injector} from 'angular2/core';

let appInjectorRef: Injector;
export const appInjector = (injector?: Injector) => {
	if (!injector) {
		return appInjectorRef;
	}

	appInjectorRef = injector;

	return appInjectorRef;
};
