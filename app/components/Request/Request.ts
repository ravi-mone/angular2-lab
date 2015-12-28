/**
 * Created by techjini on 23/12/15.
 */
import {Injectable, Inject} from 'angular2/core';
import {Http, Request, RequestMethod, Headers} from 'angular2/http';
import User from '../../services/models/user';

@Injectable()
export class AutoAuthenticator {
  api=null;
  public queryBuilder(queryObject:any) {
    var str = '';

    for (key in queryObject) {
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

  constructor(public http:Http, @Inject('APIEndpoint') api, public user:User) {
   this.api = api;
  }


  login(type:string, url:string, queryString:any) {

    var qString = `scope=retailer&client_id=ppPartner&client_secret=Nhgij-I87J5N0g4nso8H5J-uijd4sNbF4gha&grant_type=password&${this.queryBuilder(queryString)}`;

    return this.http.request(new Request({
      method: this.returnMethodType(type),
      url: `${this.api}${url}`,
      search: qString
    }));
  }

  getRequestHeaders(){
    return (new Headers({
      /*'authorization' : 'Bearer '+this.user._user.access_token,*/
      'accept'        : 'application/json'

    }));
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
