import {Component} from 'angular2/core';
import {Ng2Highcharts} from 'ng2-highcharts/ng2-highcharts';
@Component({
	selector: 'chart',
	inputs: ['chartData:chartdata', 'driverName:drivername'],
	templateUrl: './components/F1Drivers/chart/chart.html',
	styleUrls: ['./components/F1Drivers/chart/chart.css'],
	directives: [Ng2Highcharts]
})
export class Chart {
	chartOptions:Object;
  driverName:Object;
  chartData:Array<Object>;
  public ngOnInit() {
    //console.log('ngOnInit', this.driverName, this.chartData);
    let data = this.chartData;
    var obj = {
      positions:[],
      points:[]
    };

    for(let i=0; i<data.length; i++) {
      obj['positions'].push(parseInt(data[i]['position'], 10));
      obj['points'].push(parseInt(data[i]['points'], 10));
    }
//
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: ''
      },
      yAxis: {
        min: Math.min.apply(null, obj.positions),
        max: Math.max.apply(null, obj.positions),
        title: {
          text: 'Position'
        },
        data:obj.positions
      },
      series: [{
        name: `Name : ${this.driverName['Driver']['givenName']+' '+this.driverName['Driver']['familyName']}`,
        data: [parseInt(this.driverName['position'], 10)]

      }]
    };
  }
}
