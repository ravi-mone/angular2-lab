import {Component, Injector, Directive, Inject}   from 'angular2/core';
import { CanActivate, Router}                    from 'angular2/router';
import {HTTP_REQUEST_PROVIDER}            from '../Request/Request'
import {NameList}                         from '../../services/name_list';
import User                               from '../../services/models/user'
import {Auth}                             from '../../services/auth/auth'
import {TablePlugIn}                      from '../plugins/tablePlugin'
import {ChatBlinkDirective}               from '../directive/directive'
import {appInjector}                      from '../../helpers/app-injector';


@Component({
  selector: 'about',
  templateUrl: './components/about/about.html',
  directives :[TablePlugIn],
  providers: [User, ChatBlinkDirective, Auth],
})

export class AboutCmp{

  loadTable: boolean =false;
  reports:Object = null;
  columns:Object = [];
  auth:any =null;
  loggedIn: boolean = false;

  constructor(public list:NameList, public user:User, public auth:Auth, public _router:Router) {
    let injector: Injector = appInjector();
    let httpRequest: HTTP_REQUEST_PROVIDER = injector.get(HTTP_REQUEST_PROVIDER);
    this.auth = auth;
    try {
      //var injector = Injector.resolveAndCreate([]);
     // let user = injector.get(User);
      httpRequest.request('GET', '5681453b1200006c0a93a24b',
        {retailerId: user._user.Retailer_id, count: 25}
      )
        .subscribe(res => {
        let data = res.json().results;

        this.columns = /*Object.keys(res.json().results[0]);*/
        [
          { name : 'orderId', aggregate: 'link', displayName: 'Order Id #' },
          { name : 'orderRef', displayName: 'Order Ref'   },
          { name : 'createdOn', aggregate: 'date', displayName: 'Created On'  },
          {
            name : 'customerFirstName',
            aggregate : 'concat', fields : ['customerFirstName', 'customerLastName'],
            displayName: 'Customer Name'
          }
        ];
        this.reports = [{ data :  data, columns : this.columns}];
        this.loadTable=true;
      }, err => console.log('Error', err));
    }catch(e) {
      console.log(e)
    }
  }

  /**
   * routerOnActivate is the first router lifecycle hook called after the component is loaded.
   * You’ll never run routerOnActivate if CanActivate fails.
   * CanActivate -> Yes? -> Component Loaded -> routerOnActivate
   * */
  routerOnActivate(){
    this.auth.check()
      .then((result: any) => {
        this.loggedIn = result._signed_in;
        if(!this.loggedIn){
          this._router.navigate(['Login']);
        }
      })
      .catch(() => {
        this.loggedIn = false;
      });
  }
}


