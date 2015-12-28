import {Inject, Injectable} from 'angular2/angular2';

import {Http} from 'angular2/http';

import {IPromise} from 'rx';

import {GitHubUser} from './interfaces';
import {GITHUB_API_ROOT, API_TOKEN} from '../../config/config';

class UrlBuilder {
  constructor(private url:string, private token:string) {}
  private appendToken(url:string):string {
    if (this.token) {
      return url + `?access_token=${API_TOKEN}`;
    }
    return url;
  }
  user(user:string):string {
    return this.appendToken(`${this.url}/users/${user}`);
  }
}

@Injectable()
export class GitHubAPI {
  private urlBuilder:UrlBuilder;
  constructor(@Inject(Http) private http:Http) {
    this.urlBuilder = new UrlBuilder(GITHUB_API_ROOT, API_TOKEN);
  console.log(this.urlBuilder)
  }
  public getUser(user:string):IPromise<GitHubUser> {
  //http.request('data.txt').subscribe(res => this.data = res.text());
    var httpCall = this.http.get(this.urlBuilder.user(user))
      .map(res => res.json())
      .toPromise();
      console.log(httpCall)
    return httpCall;
  }
public getDrivers():IPromise {
  //http.request('data.txt').subscribe(res => this.data = res.text());
  var httpCall = this.http.get('drivers.json')
      .map(res => res.json())
      .toPromise();
  console.log(httpCall)
  return httpCall;
}
}
