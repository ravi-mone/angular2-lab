import { Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouterLink}            from 'angular2/router';
import {CORE_DIRECTIVES} from 'angular2/common';
import {NamesList} from '../../services/models/NameList';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
  selector: 'events-demo',
  providers: [NamesList],
  templateUrl: './components/Events/events.html',
  directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES, RouterLink],
  styles:[`#results { float:right; margin:20px; padding:20px; border:1px solid; background:#ccc; }`]
})

export class EventsDemo {
  articles:Array<Object>;

  constructor(public list:NamesList) {
    this.articles = this.list.articleList;
    let webcam = window['Webcam'];


    webcam.set({
      // live preview size
      width: 220,
      height: 140,

      // device capture size
      dest_width: 220,
      dest_height: 140,

      // final cropped size
      crop_width: 240,

      // format and quality
      image_format: 'jpeg',
      jpeg_quality: 90
    });

    webcam.attach( '#my_camera' );

  }

  addArticle(firstName, lastName) {
    console.log('Adding article with title', firstName.value, 'and link', lastName.value);
    let $this = this;
    let webcam = window['Webcam'];
    // take snapshot and get image data
    webcam.snap( function(data_uri) {
      // display results in page
      $this.list.postArticle({firstName: '', lastName: '', snap:data_uri});
     // firstName.value = '';
      //lastName.value = '';
    } );
    webcam.off();

  }

  /*deleteArticle(index) {
    this.list.deleteArticle(index);
  }*/
}
