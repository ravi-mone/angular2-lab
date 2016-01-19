var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var ng2_highcharts_1 = require('ng2-highcharts/ng2-highcharts');
var Chart = (function () {
    function Chart() {
    }
    Chart.prototype.ngOnInit = function () {
        console.log('ngOnInit', this.driverName, this.chartData);
        var data = this.chartData;
        var obj = {
            positions: [],
            points: []
        };
        for (var i = 0; i < data.length; i++) {
            obj['positions'].push(parseInt(data[i]['position'], 10));
            obj['points'].push(parseInt(data[i]['points'], 10));
        }
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
                data: obj.positions
            },
            series: [{
                    name: "Name : " + (this.driverName['Driver']['givenName'] + ' ' + this.driverName['Driver']['familyName']),
                    data: [parseInt(this.driverName['position'], 10)]
                }]
        };
    };
    Chart = __decorate([
        core_1.Component({
            selector: 'chart',
            inputs: ['chartData:chartdata', 'driverName:drivername'],
            templateUrl: './components/F1Drivers/chart/chart.html',
            styleUrls: ['./components/F1Drivers/chart/chart.css'],
            directives: [ng2_highcharts_1.Ng2Highcharts]
        }), 
        __metadata('design:paramtypes', [])
    ], Chart);
    return Chart;
})();
exports.Chart = Chart;
//# sourceMappingURL=chart.js.map