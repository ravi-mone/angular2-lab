import {Component, OnInit}            from 'angular2/core';
import {Http}                         from 'angular2/http';
import {ROUTER_DIRECTIVES}            from 'angular2/router';
import {Points}                       from './points/points';
import {Nationality}                  from './nationality/nationality';
import {DriverHeader}                 from './Header/driverheader';
import {NamesList}                    from '../../services/models/NameList';
import {LimitToPipe}                  from '../pipes/limitTo';
//import * as chunk                     from 'lodash/array/chunk';
@Component({
  selector: 'f1Drivers',
  /*
   * bindings are available to a component and its children,
   * viewBindings are only available to a particular view,
   * */
  providers: [NamesList],
  templateUrl: './components/F1Drivers/f1Drivers.html',
  directives: [Points, Nationality, DriverHeader, ROUTER_DIRECTIVES],
  pipes:[LimitToPipe]
  //viewBindings: [httpInjectables]
})
export class F1Drivers implements OnInit {
  driverObj:Array<Object>;
  pageSelected:number;
  driversList:Array<Object>;
  showTable:boolean=false;


  public ngOnInit(): void {

    try {
      this.list.get()
      .subscribe(res => {
        let data = res.json();
        this.driverObj = data[0]['DriverStandings'];
         this.driversList = this.driverObj;
        this.pageSelected = this.driverObj.length;
        this.showTable= true;
      });
    } catch (e) {
      console.log(e);
    }
  }

  constructor(private list:NamesList, private http:Http) {

  }

  showSelected(limitTo) {
    //this.driverObj = this.driversList;
    //this.driverObj = chunk(this.driverObj, limitTo)[0];
    this.pageSelected = limitTo;
  }

  //Function called when the user clicks on the search button.
  filterObj(obj, key, nameFilter) {
    var driverName = key;
    if ((driverName.toLowerCase()).indexOf(nameFilter.toLowerCase()) !== -1) {
      //make parseInt so as to apply orderBy filter on 'points', 'position' and 'wins' column
      obj.points = parseInt(obj.points);
      obj.position = parseInt(obj.position);
      obj.wins = parseInt(obj.wins);
      return obj;
    }
  }

  filterByNames(nameFilter) {
    this.driverObj = this.driversList;

    /*The filter() method creates a new array with all elements that pass the test implemented by the provided function.
     * refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
     * */
    var self = this;
    this.driverObj = this.driverObj.filter(function (Obj) {

      return self.filterObj(Obj, Obj['Driver']['givenName'], nameFilter.value);
    });
    this.pageSelected = this.driverObj.length;
  }

}
