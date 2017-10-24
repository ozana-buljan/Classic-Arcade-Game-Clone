/**
 * @description define each block size
 */

var blockWidth = 101,
    blockHeight = 83,
    numRows = 6,
    numCols = 5,
    minSpeed = Math.ceil(60),
    maxSpeed = Math.floor(120);


/** @description Enemies our player must avoid
 * @constructor
 */

var Enemy = function (row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // randomly load bug on game start
    this.row = row;
    // randomly set the start point of an enemy
    this.x = (-blockWidth) - Math.floor(Math.random() * 120);

    // define speed
    this.speed = minSpeed + Math.floor(Math.random() * (maxSpeed - minSpeed));

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

/**
 * @description : Update the enemy's position, required method for game
 * @Param: dt, a time delta between `ticks
 */

Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < numRows * blockWidth) {
        this.x += this.speed * dt;
    } else {
        this.x = (-blockWidth) - Math.floor(Math.random() * 20);
        this.speed = minSpeed + Math.floor(Math.random() * (maxSpeed - minSpeed));
    }
};

/**
 * @description Draw the enemy on the screen, required method for game
 */
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.row * (blockHeight - 13));
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
/**
 * @description define the Player class
 * @constructor
 */
var Player = function () {
    // initial position of the player on the grid
    this.col = 3;
    this.row = 5;
    this.moveDistanceX = blockWidth;
    this.moveDistanceY = 161 - blockHeight;

    // Initial x, y coordinator of the player, (this.col-1) is to reduce the player image width.
    this.x = (this.col - 1) * this.moveDistanceX;
    this.y = (this.row - 1) * this.moveDistanceY;

    this.sprite = 'images/char-boy.png';
};

/**
 * @description define Player update functoin
 */

Player.prototype.update = function (key) {
    // pressed left key
    if (key === 'left' && this.col > 1) {
        this.col--;
        this.x = (this.col - 1) * this.moveDistanceX;
    } else if (key === 'up' && this.row > 1) {
        this.row--;
        this.y = (this.row - 1) * this.moveDistanceY;
    } else if (key === 'right' && this.col < numCols) {
        this.col++;
        this.x = (this.col - 1) * this.moveDistanceX;
    } else if (key === 'down' && this.row < numRows) {
        this.row++;
        this.y = (this.row - 1) * this.moveDistanceY;
    } else {

    }
};
/**
 * @description render Player on the canvas
 */
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


/**
 * @description handle key events to the Player
 */
Player.prototype.handleInput = function (key) {
    this.update(key);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemyA = new Enemy(1);
var enemyB = new Enemy(2);
var enemyC = new Enemy(3);
var allEnemies = [enemyA, enemyB, enemyC];

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
