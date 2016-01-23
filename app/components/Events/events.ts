import { Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {NamesList} from '../../services/models/NameList';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';

@Component({
  selector: 'events-demo',
  providers: [NamesList],
  templateUrl: './components/Events/events.html',
  directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES]
})

export class EventsDemo {
  articles:Array<Object>;

  constructor(public list:NamesList) {
    this.articles = this.list.articleList;
  }

  addArticle(title, link) {
    console.log('Adding article with title', title.value, 'and link', link.value);
    this.list.postArticle({title: title.value, link: link.value});
    title.value = '';
    link.value = '';
  }

  deleteArticle(index) {
    this.list.deleteArticle(index);
  }
}
