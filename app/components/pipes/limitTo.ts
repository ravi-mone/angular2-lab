import {Pipe} from 'angular2/core';


@Pipe({name: 'limitTo'})
export class LimitToPipe {
  transform(array :any, selection:any) : any {
    //console.log(array, selection);

    /* if(array.length == selection[0]) {
      return array;
    }*/
    return array;//.splice(0, selection[0]);
  }

}
