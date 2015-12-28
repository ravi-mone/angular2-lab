import {Component, OnInit, Injector, Directive  } from 'angular2/core';

import { CanActivate } from 'angular2/router';

import {AutoAuthenticator} from '../Request/Request'
import {NameList} from '../../services/name_list';
import User from '../../services/models/user'
import {TablePlugIn} from '../plugins/tablePlugin'
import {ChatBlinkDirective} from '../directive/directive'

@Component({
  selector: 'about',
  templateUrl: './components/about/about.html',
  directives :[TablePlugIn],
  providers: [User, AutoAuthenticator, ChatBlinkDirective],
})

export class AboutCmp implements OnInit {

  loadTable=false;
  reports=null;
  columns=[];//["orderId", "orderRef", "customerId", "customerFirstName", "customerLastName", "type", "status", "totalPaidPrice", "currency", "createdOn"] ;
  authenticator=null

  /*
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */

  @CanActivate((next, prev) => {
    console.log(next, prev)
  })
  columns=[];

  constructor(public list:NameList, public user:User, public authenticator: AutoAuthenticator) {
    /*injectors. resolveAndCreate() is basically a factory function that
    creates an injector and takes a list of providers*/
    try {
      //var injector = Injector.resolveAndCreate([]);
     // let user = injector.get(User);
      authenticator.request('GET', '/api/v4.1/order',
        {retailerId: user._user.Retailer_id, count: 25}
      ).subscribe(res => {
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
      });
    }catch(e) {
      console.log(e)
    }
  }
}


