import { Component, ViewEncapsulation} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {debug} from "util";
import {NamesList} from '../../services/models/NameList';
/*import {game} from './game'*/
import {ex} from 'excalibur/dist/excalibur';

@Component({
    selector: 'letsDrive',
    templateUrl: './components/LetsDrive/letsDrive.html',
    directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES],
    providers: [NamesList],
    encapsulation: ViewEncapsulation.Native,
    styles: [`canvas {
            border:1px solid #d3d3d3;
            background-color: #f1f1f1;
        }`]
})

export class LetsDrive {

constructor(){

}
}
