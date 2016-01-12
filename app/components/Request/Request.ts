/**
 * Created by techjini on 23/12/15.
 */
import {Injectable, Inject}  from 'angular2/core';
import {Http, Request, RequestMethod, Headers}  from 'angular2/http';
import User                                     from '../../services/models/user';
import {Auth}                                     from '../../services/auth/auth';
import {Router}                                 from 'angular2/router';

@Injectable()
export class HttpRequestProvider {
  api=null;
  userSignedIn=false;


  public queryBuilder(queryObject:any) {
    var str = '';

    for (let key in queryObject) {
      str += key + '=' + queryObject[key] + '&';
    }
    str = str.substr(0, str.length - 1);
    return str;

  }

  public returnMethodType(type:string) {
    var requestTypes = {
      'GET': RequestMethod.Get,
      'POST': RequestMethod.Post
    };
    return requestTypes[type];
  }

  constructor(public http:Http, @Inject('APIEndpoint') api, public user:User, private _router: Router, public auth:Auth) {
   this.api = api;
  }


  login(type:string, url:string, queryString:any) {

    var qString = `scope=somethg&grant_type=password&${this.queryBuilder(queryString)}`;
    return this.auth.login(qString, url);


  }

  getRequestHeaders() {
    return (new Headers({
      /*'authorization' : 'Bearer '+this.user._user.access_token,*/
      'accept'        : 'application/json'

    }));
  }

  isUserLoggedIn() {
    return this.userSignedIn;
  }

  request(type:string, url:string, queryString:any) {

    return this.http.request(new Request({
      method: this.returnMethodType(type),
      url: `${this.api}${url}`,
      search: this.queryBuilder(queryString),
      headers: this.getRequestHeaders()
    }));
  }
}
