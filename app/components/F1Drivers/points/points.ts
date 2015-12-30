/**
 * Created by ravi on 28/8/15.
 */
import {Component, View} from 'angular2/core';
import {Attribute} from "angular2/core";
@Component({
    selector: 'Points',
    //properties: ['text: alt'],
    templateUrl: './components/F1Drivers/points/points.html?v=<%= VERSION %>'
})
export class Points {
    points:string;
    constructor(@Attribute('alt') value){
      this.points = value;
    }
}
