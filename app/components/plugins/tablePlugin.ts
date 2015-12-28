import {Component, OnInit, Injector, Input, Pipe} from 'angular2/core';
import {Router, RouteParams, ComponentInstruction} from 'angular2/router';
import {OnActivate} from "angular2/router";

import {aggregateFnPipe} from "../pipes/aggregateFn";
import {CustomOrderByPipe} from "../pipes/CustomOrderByPipe";

import {appInjector} from '../helpers/app-injector';

//var _ = require("lodash");

@Component({
  selector: 'tablePlugin',
  templateUrl :'./components/plugins/table.html',
  pipes:[aggregateFnPipe, CustomOrderByPipe]
})
export class TablePlugIn implements OnInit{
  @Input('title') header: string;
  @Input() data: any;
  @Input() pagination :string;
  columns=[];
  defaultSort='-Select-';
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

/*
var Table = React.createClass({


  render: function () {
    var self = this;

    // build main heading dom
    var title = this.props.title, titleDom = '';
    if(title) {
      titleDom = <h2 className="mdl-card__title-text">{title}</h2>
    }

    var columns = this.props.columns;
    var headingDom = _.map(columns, function(column, columnIndex) {
      return <th key={'heading-' + columnIndex}>{column.name}</th>;
    });
    if(headingDom.length > 0) {
      headingDom = <thead><tr>{headingDom}</tr></thead>
    }

    var rowFilter = this.props.rowFilter || function() { return true; };
    var rowTransformer = this.props.rowTransformer || function(row) { return row; };

    var rowDom = _.chain(this.props.rows)
      .filter(rowFilter)
      .map(function(row) {
        return { rowColumns:rowTransformer(row), original:row };
      })
      .map(function(row, rowIndex) {
        var colDom = _.map(row.rowColumns, function(col, colIndex) {
          var columnDef = columns[colIndex];

          var value = columnDef.valueDecorator ? columnDef.valueDecorator(col, row.original) : col;
          var className = columnDef.classDecorator ? columnDef.classDecorator(col, row.original) : undefined;

          if(columnDef.linkDecorator) {
            var href = columnDef.linkDecorator(col, row.original);
            return <td key={'col-'+rowIndex+'-'+colIndex} className={className}><a href={href}>{value}</a></td>;
          } else {
            return <td key={'col-'+rowIndex+'-'+colIndex} className={className}>{value}</td>;
          }
        });
        return <tr key={'row-'+rowIndex}>{colDom}</tr>
      })
      .value();
    if(rowDom.length > 0) {
      rowDom = <tbody>{rowDom}</tbody>
    } else {
      // TODO: style me
      rowDom = <tbody><tr><td className='no-records' colSpan={this.props.columns.length}>no records available</td></tr></tbody>
    }

    var pagination = this.props.pagination, paginationDom;
    if(pagination) {
      var pageStart = pagination.total === 0 ? 0 : pagination.start;
      var pageEnd = Math.min(pagination.start + pagination.pageSize - 1, pagination.total);

      var noop = function(e) { e.preventDefault(); };
      var nextFn = function(e) {
        e.preventDefault();
        AppDispatcher.dispatch({ actionType:self.props.nextPage });
      };
      var prevFn = function(e) {
        e.preventDefault();
        AppDispatcher.dispatch({ actionType:self.props.prevPage });
      };
      var sizeFn = function(e) {
        e.preventDefault();
        AppDispatcher.dispatch({
          actionType: self.props.pageSize,
          perPage:parseInt(e.target.value, 10)
        });
      };

      paginationDom =
        <div className="table-pagination">
          Rows per page:
        <select onChange={sizeFn} defaultValue={pagination.pageSize}>
      <option>10</option>
      <option>25</option>
      <option>50</option>
      <option>100</option>
      </select>
      {pageStart}-{pageEnd} of {pagination.total}
      <a className={pageStart <= 1 ? 'disabled' : ''}
      onClick={pageStart <= 1 ? noop : prevFn}>
      <i className="material-icons">chevron_left</i>
      </a>
      <a className={pageEnd === pagination.total ? 'disabled' : ''}
      onClick={pageEnd === pagination.total ? noop : nextFn}>
      <i className="material-icons">chevron_right</i>
        </a>
        </div>
    }

    var classNames = "mdl-data-table mdl-js-data-table full-width";
    if(!this.props.noShadow) {
      classNames += " mdl-shadow--2dp";
    }

    return (
    <div>
    {titleDom}
    <table className={classNames}>
      {headingDom}
    {rowDom}
    </table>
    {paginationDom}
    </div>
    );

    return <div>Hi there</div>
  }
});

Table.builder = function() {
  var title;
  var columns = [];
  var lastColumn = {};
  var rows = [];
  var rowTransformer = function(row) { return row; };
  var rowFilter = function(row) { return true; };
  var pagination, nextPage, prevPage, pageSize;

  return {
    title: function(title) { this.title = title; return this; },
    column: function(name, include) {
      lastColumn = { name:name };
      if(include !== false) {
        columns.push(lastColumn);
      }
      return this;
    },
    valueDecorator: function(valueDecorator) {
      lastColumn.valueDecorator = valueDecorator;
      return this;
    },
    classDecorator: function(classDecorator) {
      lastColumn.classDecorator = classDecorator;
      return this;
    },
    linkDecorator: function(linkDecorator) {
      lastColumn.linkDecorator = linkDecorator;
      return this;
    },
    rowTransformer: function(inRowTransformer) {
      rowTransformer = inRowTransformer;
      return this;
    },
    rowFilter: function(inRowFilter) {
      rowFilter = inRowFilter;
      return this;
    },
    rows: function(inRows) {
      rows = inRows;
      return this;
    },
    pagination: function(start, total, pageSize) {
      pagination = {
        start: start,
        total: total,
        pageSize: pageSize
      };
      return this;
    },
    onNextPage: function(event) {
      nextPage = event;
      return this;
    },
    onPrevPage: function(event) {
      prevPage = event;
      return this;
    },
    onPageSize: function(event) {
      pageSize = event;
      return this;
    },
    render: function() {
      return <Table
        title={title}
      columns={columns}
      rows={rows}
      rowFilter={rowFilter}
      rowTransformer={rowTransformer}
      pagination={pagination}
      nextPage={nextPage}
      prevPage={prevPage}
      pageSize={pageSize}/>
    },
    build: function() {
      return React.createClass({
        render:function() {
          return <Table title={title}
          columns={columns}
          rows={rows}
          rowFilter={rowFilter}
          rowTransformer={rowTransformer}
          pagination={pagination}
          nextPage={nextPage}
          prevPage={prevPage}
          pageSize={pageSize} />
        }
      });
    }
  }
};
*/
