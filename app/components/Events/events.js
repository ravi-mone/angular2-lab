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
var common_1 = require('angular2/common');
var NameList_1 = require('../../services/models/NameList');
var EventsDemo = (function () {
    function EventsDemo(list) {
        this.list = list;
        this.articles = this.list.articleList;
        console.log(this.articles);
    }
    EventsDemo.prototype.addArticle = function (title, link) {
        console.log('Adding article with title', title.value, 'and link', link.value);
        this.list.postArticle({ title: title.value, link: link.value });
        title.value = '';
        link.value = '';
    };
    EventsDemo.prototype.deleteArticle = function (index) {
        console.log(index);
        this.list.deleteArticle(index);
    };
    EventsDemo = __decorate([
        core_1.Component({
            selector: 'events-demo',
            providers: [NameList_1.NamesList],
            templateUrl: './components/Events/events.html',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [NameList_1.NamesList])
    ], EventsDemo);
    return EventsDemo;
})();
exports.EventsDemo = EventsDemo;
//# sourceMappingURL=events.js.map