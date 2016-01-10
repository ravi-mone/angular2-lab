import {Component, Inject} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router, RouteParams, RouterLink} from 'angular2/router';
import {Nationality} from '../nationality/nationality'
import {Points} from '../points/points'
import {NamesList} from '../../../services/models/NameList';
import {Chart} from '../chart/chart'

@Component({
  selector: 'driver-details',
  providers: [NamesList],
  templateUrl: './components/F1Drivers/Details/details.html',
  directives: [RouterLink, Nationality, Points, CORE_DIRECTIVES, Chart]
})

export class Details{
  driverObj:Array<Object>;
  driver:Object;
  id:string;
  showWhenTrue = false;
  chartOptions:any;
  driverData:Array<Object>;
  constructor(public list:NamesList, params:RouteParams) {
    this.id = params.get('name');
    var result = this.list.get()
      .subscribe(res => {
        let data = res.json();
        this.driverData=data[0]['DriverStandings'];
        this.driver = data[0]['DriverStandings'][parseInt(this.id,10) - 1];
        this.showWhenTrue = true;
      })


    this.chartOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }]
    };


      /*driverdata*/

  }




}
