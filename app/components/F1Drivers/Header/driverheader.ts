/**
 * Created by ravi on 28/8/15.
 */

import {Component, OnInit} from 'angular2/core';

import {NamesList} from '../../../services/models/NameList';

@Component({
    selector: 'driverHeader',
    inputs:['driverObj:driverdata'],
    templateUrl: './components/F1Drivers/Header/driverheader.html'
})
export class driverHeader implements OnInit{

    driverObj:Array<Object>;
    isreverse:boolean = false;

    public ngOnInit(){
     // console.log(this.driverObj); //This will print the values
    }

  constructor(){
    // `constructor` is too early in the lifecycle, inputs haven't been hooked up yet,
    //console.log( this.driverObj);  //This will NOT print the values.
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
