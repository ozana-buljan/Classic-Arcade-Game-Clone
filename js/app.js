/** @description Enemies our player must avoid
 * @constructor
 */
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = 1;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

/**
 * @description : Update the enemy's position, required method for game
 * @Parameter: dt, a time delta between `ticks
 */

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * (dt * 0.12);

};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
/**
 * @description define the Player class
 * @constructor
 */
var Player = function () {
    this.x = 200;
    this.y = 400;
    this.moveDistance = 50;
    this.sprite ='images/char-horn-girl.png';
};

/**
 * @description define Player update functoin
 */

Player.prototype.update = function () {

};

/**
 * @description handle key events to the Player
 */
Player.prototype.handleInput = function(key){
    // pressed left key
    if (key === 'left' && this.x > 0){
        this.x -= this.moveDistance;
    } else if ( key === 'up' && this.y > 0) {
        this.y -= this.moveDistance;
    } else if (key === 'right' && this.x <= ctx.width){
        this.x += this.moveDistance;
    } else if (key === 'down' && this.y <= ctx.height){
        this.y += this.moveDistance ;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemyA = new Enemy();
var enemyB = new Enemy();
var allEnemies = [enemyA, enemyB];

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
