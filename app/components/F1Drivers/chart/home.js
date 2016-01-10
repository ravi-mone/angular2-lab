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
var ChartCmp = (function () {
    function ChartCmp() {
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
    }
    ChartCmp.prototype.ngOnInit = function () {
        console.log('ngOnInit', this.chartData);
    };
    ChartCmp = __decorate([
        core_1.Component({
            selector: 'chart',
            inputs: ['chartOptions', 'chartData:chart-data']
        }),
        core_1.View({
            templateUrl: './components/chart/chart.html',
            styleUrls: ['./components/chart/chart.css'],
            directives: [ng2_highcharts_1.Ng2Highcharts]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartCmp);
    return ChartCmp;
})();
exports.ChartCmp = ChartCmp;
//# sourceMappingURL=home.js.map