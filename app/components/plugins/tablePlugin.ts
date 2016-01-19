import {Component, OnInit, Input}  from 'angular2/core';
import {Router}            from 'angular2/router';
import {AggregateFnPipe}                                      from '../pipes/aggregateFn';
import {CustomOrderByPipe}                                    from '../pipes/CustomOrderByPipe';


@Component({
  selector: 'table-plugin',
  templateUrl :'./components/plugins/table.html',
  styleUrls : ['/assets/style.min.css'],
  pipes:[AggregateFnPipe, CustomOrderByPipe]
})
export class TablePlugIn implements OnInit {
  //@Input('title') header: string;
  @Input() data: any;
  @Input() pagination :string;
  columns=[];
  defaultSort='-Select-';
  title=null;
  operator=null;
  ngOnInit() {
    this.columns = this.data[0].columns;
  }
  constructor(private _router: Router) {
  }

  sortBy(data, column) {
    this.operator = (this.operator === '') ? '-' : '';
    var customOrderBy = new CustomOrderByPipe();
    customOrderBy.transform(data, [this.operator+column.name]);
    this.defaultSort = column.displayName;
  }
  navigateTo(page, value) {
    alert('Write your navigation or other related code here');
   // this._router.navigate([page, { id: value }]  /*['HeroDetail', { id: hero.id }]*/);

  }
}

