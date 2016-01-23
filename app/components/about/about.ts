import {Component, Injector, ViewEncapsulation}   from 'angular2/core';
import { Router}                    from 'angular2/router';
import {HttpRequestProvider}            from '../Request/Request';
import User                               from '../../services/models/user';
import {Auth}                             from '../../services/auth/auth';
import {TablePlugIn}                      from '../plugins/tablePlugin';
import {F1Drivers}                        from '../F1Drivers/F1Drivers';
import {EventsDemo}                       from '../Events/events';
import {appInjector}                      from '../../helpers/app-injector';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
  selector: 'about',
  templateUrl: './components/about/about.html',
  styleUrls: ['./components/about/about.css'],
  /*Specify how the template and the styles should be encapsulated.
   The default is ViewEncapsulation.Emulated if the view has styles, otherwise ViewEncapsulation.None.*/
  //encapsulation:ViewEncapsulation.None/Emulated/Native,
  encapsulation: ViewEncapsulation.None,
  directives: [TablePlugIn, F1Drivers, EventsDemo, MATERIAL_DIRECTIVES],
  providers: [User, Auth]
})

export class AboutCmp {

  loadTable:boolean = false;
  reports:Object = null;
  columns:Object = [];
  loggedIn:boolean = false;

  constructor(public user:User, public auth:Auth, public _router:Router) {

    let injector:Injector = appInjector();
    let httpRequest:HttpRequestProvider = injector.get(HttpRequestProvider);
    this.auth = auth;
    try {
      httpRequest.request('GET', '5681453b1200006c0a93a24b',
        {retailerId: user._user.Retailer_id, count: 25}
        )
        .subscribe(res => {
          let data = res.json().results;


          /*If you want all the columns of the  result, then uncomment the below line and comment the following
          this.columns = [{..}] */

         // this.columns = Object.keys(res.json().results[0]);

          this.columns = [
              {name: 'orderId', aggregate: 'link', displayName: 'Order Id #'},
              {name: 'orderRef', displayName: 'Order Ref'},
              {name: 'createdOn', aggregate: 'date', displayName: 'Created On'},
              {
                name: 'customerFirstName',
                aggregate: 'concat', fields: ['customerFirstName', 'customerLastName'],
                displayName: 'Customer Name'
              }
            ];
          this.reports = [{data: data, columns: this.columns}];

          this.loadTable = true;
        }, err => console.log('Error', err));
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * routerOnActivate is the first router lifecycle hook called after the component is loaded.
   * You’ll never run routerOnActivate if CanActivate fails.
   * CanActivate -> Yes? -> Component Loaded -> routerOnActivate
   * */
  routerOnActivate() {
    this.auth.check()
      .then((result:any) => {
        this.loggedIn = result._signed_in;
        if (!this.loggedIn) {
          this._router.navigate(['Login']);
        }
      })
      .catch(() => {
        this.loggedIn = false;
      });
  }
}


