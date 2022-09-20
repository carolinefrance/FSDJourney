//Set global variable that contains position, velocity and the html element "ball"
var velocity = 100; // controls speed
var positionX = 0; // sets positionX's initial pos to 0
var positionY = 0; // sets positionY's initial pos to 0
var ball = document.getElementById("ball1"); // gets html element ball1
var reverse = false; // var will reverse ball direction later
// x, y axes of area in which balls move
var Xmin = 0;
var Xmax = 300;
var Ymin = 0;
var Ymax = 300;
//function changes the position of the html ball
function moveBall() {
    // reverse the direction of the ball
    let vel = velocity
    if (reverse) {
        vel = -1.0 * vel;
    }
    positionX = positionX + vel;
    if (positionX >= Xmax || positionX <= 0) {
        reverse = !reverse;
    }
    ball1.style.left = positionX + 'px';
    // Y logic
    positionY = positionY + vel;
    if (positionY >= Ymax || positionY <= 0) {
        reverse = !reverse;
    }
    ball1.style.top = positionY + 'px';
}