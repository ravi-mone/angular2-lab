import {Injectable, Inject}                   from 'angular2/core';
import {Http, Request, RequestMethod}         from 'angular2/http';
import User                                   from '../../services/models/user';


@Injectable()
export class Auth {
  api: string = '';
	constructor(public http: Http, public user:User, @Inject('APIEndpoint') api) {
    this.api = api;
  }

	login(qString, uri) {

		return new Promise((resolve, reject) => {

			this.http.request(new Request({
          method: RequestMethod.Get,
          url: `${this.api}${uri}`,
          search: qString
        }))
				.subscribe((res: any) => {

					if (res) {
            this.user.setUser(res.json());
						resolve(this.user);
					} else {
						reject(false);
					}
				});
		});
	}

	check() {
		return new Promise((resolve) => {
			if (this.user) {
				resolve(this.user);
			} else {
				resolve(false);
			}
		});
	}

	logout() {
		this.user = false;
		this.isAdmin = false;
	}
}

export const AUTH_PROVIDERS = [Auth];
