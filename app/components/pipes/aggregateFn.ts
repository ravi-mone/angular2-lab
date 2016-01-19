import {Pipe} from 'angular2/core';
import {DatePipe} from 'angular2/common';


@Pipe({name: 'aggregateFn'})
export class AggregateFnPipe {
  transform(value:string, args:string[]) : any {
    var decor:any =null;
    if(args[0]) {
      switch(args[0]) {
        case 'date':
          let datePipe = new DatePipe();
          let d = new Date(value);
          if(!d.getDate()) {
            d = new Date(value.replace('+', ''));
          }
          decor = datePipe.transform(d, 'fulldate');
          break;
      }
      switch(args[0].substr(0, args[0].indexOf(':'))) {
        case 'fixed':
          let number = parseInt(args[0].substr(args[0].indexOf(':') + 1), 10);
          decor = parseFloat(value).toFixed(number);
          break;
        case 'concat':

         // let number = args[0].substr(args[0].indexOf(':') + 1);
          decor = value;
      }
      return decor;
    }
    return value;
  }
}
