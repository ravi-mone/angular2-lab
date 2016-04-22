// Create an instance of the engine.
// I'm specifying that the game be 800 pixels wide by 600 pixels tall.
// If no dimensions are specified the game will be fullscreen.
import {ex} from 'excalibur/dist/excalibur';

// game.js

// Create an instance of the engine.
var game = new ex.Engine({
    width: 800,
    height: 600
});

// Create an actor with x position of 100px,
// y position of 40px from the bottom of the screen,
// width of 200px, height and a height of 20px
var paddle = new ex.Actor(100, game.getHeight() - 40, 200, 20);

// Let's give it some color with one of the predefined
// color constants
paddle.color = ex.Color.Chartreuse;

// Make sure the paddle can partipate in collisions, by default excalibur actors do not collide
paddle.collisionType = ex.CollisionType.Active;

// `game.addChild` is the same as calling
// `game.currentScene.addChild`
game.add(paddle);

module.exports = {
    game : game
};