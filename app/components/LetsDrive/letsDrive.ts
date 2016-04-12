import { Component, ViewEncapsulation} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {debug} from "util";

@Component({
    selector: 'letsDrive',
    templateUrl: './components/LetsDrive/letsDrive.html',
    directives: [CORE_DIRECTIVES, MATERIAL_DIRECTIVES],
    encapsulation: ViewEncapsulation.Native,
    styles: [`canvas {
            border:1px solid #d3d3d3;
            background-color: #f1f1f1;
        }`]
})

export class LetsDrive {

    initializer(){

        var myObstacles = [];
        var $this = this;
        var myScore = new this.component("30px", "Consolas", "black", 280, 40, "text", $this);
        var myGamePiece = new this.component(30, 30, "red", 10, 120, null, $this);
        var myGameArea = {
            frameNo : 0;
            canvas: document.createElement("canvas"),
            start: function () {
                $this.canvas = document.createElement("canvas");
                this.canvas.width = 480;
                this.canvas.height = 270;
                $this.context = this.canvas.getContext("2d");
                document.body.insertBefore(this.canvas, document.body.childNodes[5]);

                $this.interval = setInterval(function(){
                    LetsDrive.prototype.updateGameArea(myObstacles)

                }, 20);
            },
            clear: function () {
                $this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        };

        return {myObstacles : myObstacles, myGameArea:myGameArea, myScore:myScore, myGamePiece:myGamePiece};
    }
    startGame () {
let $this = this.initializer();
        /*$this.myGamePiece = new this.component(30, 30, "red", 10, 120, null);*/
        $this.myGamePiece.gravity = 0.05;
        $this.myScore = new this.component("30px", "Consolas", "black", 280, 40, "text");
        $this.myGameArea.start();
    }

    everyinterval (n) {
        let $this = this.initializer();
        if (($this.myGameArea.frameNo / n) % 1 === 0) {
            return true;
        }
        return false;
    }

    accelerate (n) {
        let $this = this.initializer();
        $this.myGamePiece.gravity = n;
    }
    updateGameArea(myObstacles) {
        var x, height, gap, minHeight, maxHeight, minGap, maxGap;
        let $this = this.initializer();
        for (var i = 0; i <  $this.myObstacles.length; i += 1) {
            if ($this.myGamePiece.crashWith($this.myObstacles[i])) {
                return;
            }
        }

        $this.myGameArea.clear();
        $this.myGameArea.frameNo += 1;
        if ($this.myGameArea.frameNo === 1 || this.everyinterval(150)) {
            x = $this.myGameArea.canvas.width;
            minHeight = 20;
            maxHeight = 200;
            height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
            minGap = 50;
            maxGap = 200;
            gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
            $this.myObstacles.push(new this.component(10, height, 'green', x, 0, null, $this));
            $this.myObstacles.push(new this.component(10, x - height - gap, 'green', x, height + gap, null, $this));
        }
        for (var i = 0; i < $this.myObstacles.length; i += 1) {
            $this.myObstacles[i].x += -1;
            $this.myObstacles[i].update();
        }
        console.log($this.myObstacles)
        $this.myScore.text = "SCORE: " + $this.frameNo;
        $this.myScore.update();
        $this.myGamePiece.newPos();
        $this.myGamePiece.update();
    }

    component(width, height, color, x, y, type, $this) {

        this.type = type;
        this.score = 0;
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;
        this.gravity = 0;
        this.gravitySpeed = 0;
        this.update = function () {


            var ctx = $this.context;
            if (this.type === "text") {
                ctx.font = this.width + " " + this.height;
                ctx.fillStyle = color;
                ctx.fillText(this.text, this.x, this.y);
            }
            else {
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
        this.newPos = function () {
            this.gravitySpeed += this.gravity;
            this.x += this.speedX;
            this.y += this.speedY + this.gravitySpeed;
            this.hitBottom();
        };
        this.hitBottom = function () {
            var myGameAreaTmp = $this.initializer()
            var rockbottom = myGameAreaTmp.myGameArea.canvas.height - this.height;
            if (this.y > rockbottom) {
                this.y = rockbottom;
                this.gravitySpeed = 0;
            }
        };
        this.crashWith = function (otherobj) {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var otherleft = otherobj.x;
            var otherright = otherobj.x + (otherobj.width);
            var othertop = otherobj.y;
            var otherbottom = otherobj.y + (otherobj.height);
            var crash = true;
            if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
                crash = false;
            }
            return crash;
        };
    }
    constructor(){

        LetsDrive.prototype.startGame();
    }
}
