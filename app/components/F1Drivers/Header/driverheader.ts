/**
 * Created by ravi on 28/8/15.
 */

import {Component, View, onInit} from 'angular2/core';

import {NamesList} from '../../../services/models/NameList';

@Component({
    selector: 'driverHeader',
    templateUrl: './components/F1Drivers/Header/driverheader.html'
})
export class driverHeader implements onInit{

    driverObj:Array<Object>;
    isreverse:boolean = false;

    constructor(public list: NamesList){
      this.driverObj=this.list.get();
      this.driverObj = this.driverObj[0]['DriverStandings'];
    }
    onInit() {

    }

    sortBy(name) {
        if (this.isreverse == false) {
            this.driverObj = this.driverObj.sort(function (a, b) {
                return a[name] - b[name];
            });
            this.isreverse = true;
        } else {
            this.driverObj = this.driverObj.sort(function (a, b) {
                return b[name] - a[name];
            });
            this.isreverse = false;
        }

    }
}
