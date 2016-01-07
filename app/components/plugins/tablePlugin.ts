import {Component, OnInit, Injector, Input, Pipe, Attribute}  from 'angular2/core';
import {Router, RouteParams, ComponentInstruction}            from 'angular2/router';
import {OnActivate}                                           from "angular2/router";
import {aggregateFnPipe}                                      from "../pipes/aggregateFn";
import {CustomOrderByPipe}                                    from "../pipes/CustomOrderByPipe";
import {appInjector}                                          from '../../helpers/app-injector';

//var _ = require("lodash");

@Component({
  selector: 'table-plugin',
  templateUrl :'./components/plugins/table.html',
  styleUrls : ['/assets/style.min.css'],
  pipes:[aggregateFnPipe, CustomOrderByPipe]
})
export class TablePlugIn implements OnInit{
  //@Input('title') header: string;
  @Input() data: any;
  @Input() pagination :string;
  columns=[];
  defaultSort='-Select-';
  title=null;
  ngOnInit() {
    this.columns = this.data[0].columns;
  }
  constructor(private _router: Router){
  }
  operator=null;
  sortBy(data, column){
    this.operator = (this.operator == '') ? '-' : '';
    var customOrderBy = new CustomOrderByPipe();
    customOrderBy.transform(data, [this.operator+column.name]);
    this.defaultSort = column.displayName;
  }
  navigateTo(page, value){
    alert('Write your navigation or other related code here');
   // this._router.navigate([page, { id: value }]  /*['HeroDetail', { id: hero.id }]*/);

  }
}

