//Set global variable that contains position, velocity and the html element "ball"
var velocity = 100; // step 2.1: sets velocity, controls speed
var positionX = 0; // step 2.2: sets positionX's initial pos to 0
var positionY = 0; // step 2.4: sets positionY's initial pos to 0
var ball = document.getElementById("ball"); // gets html element ball
var reverse = false; // step 2.3 added this var to reverse ball direction later
// fixed x, y axes coordinates
var Xmin = 0;
var Xmax = 300;
var Ymin = 0;
var Ymax = 300;
//write a function that can change the position of the html element "ball"
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
    ball.style.left = positionX + 'px';
    // Y logic
    positionY = positionY + vel;
    if (positionY >= Ymax || positionY <= 0) {
        reverse = !reverse;
    }
    ball.style.top = positionY + 'px';
}