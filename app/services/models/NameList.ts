/*
To Fix: EXCEPTION: Cannot resolve all parameters for NamesList(?). Make sure they all have valid type or annotations.
1.  import {Inject} from 'angular2/angular2';
2. @Inject(Http) private _http: Http in constructor
*/
import { Inject, Injectable, OnInit } from 'angular2/angular2';
import { Http } from 'angular2/http';

@Injectable()
export class NamesList implements OnInit {

    driverNames: Array < any > = [];
    articleList: Array < Object >= [];
    constructor(@Inject(Http) private http: Http) {
        http.get('drivers.json').subscribe(res => {
            this.driverNames = res.json();
        });
    }
    get() {
        return this.driverNames;
    }
    getDriverSpecific(index) {
    console.log('callong index, ', index, this.driverNames);
        return this.driverNames[0]['DriverStandings'][index];
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
