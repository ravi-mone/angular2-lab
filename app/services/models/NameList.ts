/*
 To Fix: EXCEPTION: Cannot resolve all parameters for NamesList(?). Make sure they all have valid type or annotations.
 1.  import {Inject} from 'angular2/angular2';
 2. @Inject(Http) private _http: Http in constructor
 */
import { Inject, Injectable, OnInit, Injector } from 'angular2/core';
import {Http, Request, RequestMethod} from 'angular2/http';
@Injectable()
export class NamesList implements OnInit {

  driverNames:Array < any > = [];
  articleList:Array < Object > = [];
  api:string = '';

  constructor(public http:Http, @Inject('APIEndpoint') api) {
    this.api = api;
  }

  get() {
    //return this.driverNames;
    return this.http.request(new Request({
      method: RequestMethod.Get,
      url: this.api + '5691823f1200005617d7d18e',
    }))

  }

  getArticleList(index) {
    return this.articleList[index];
  }

  postArticle(article) {
    this.articleList.push(article);
  }

  deleteArticle(index) {
    this.articleList.splice(index, 1);
  }
}
