//Set global variable that would contain the position, velocity and the html element "ball"
var velocity = 100; // controls speed
var positionX = 0; // sets positionX's initial pos to 0
var ball1 = document.getElementById("ball1"); // gets html element ball1
/* var ball2 = document.getElementById("ball2"); // gets html element ball2
var ball3 = document.getElementById("ball3"); // gets html element ball3
var ball4 = document.getElementById("ball4"); // gets html element ball4
var ball5 = document.getElementById("ball5"); // gets html element ball5
var ball6 = document.getElementById("ball6"); // gets html element ball6
var ball7 = document.getElementById("ball7"); // gets html element ball7 */
var reverse = false; // added this var to reverse ball direction later
// two fixed x-axis coordinates (you will use these variable in step 3)
var Xmin = 0;
var Xmax = 300;
//write a function that can change the position of the html element "ball"
function moveBall() {
    // reverse the direction of the ball
    if (reverse) {
        velocity = -1.0 * velocity;
    }
    positionX = positionX + velocity;
    if (positionX >= Xmax || positionX <= 0) {
        reverse = !reverse;
    }
    ball1.style.left = positionX + 'px';
    /*ball2.style.left = positionX + 'px';
    ball3.style.left = positionX + 'px';
    ball4.style.left = positionX + 'px';
    ball5.style.left = positionX + 'px';
    ball6.style.left = positionX + 'px';
    ball7.style.left = positionX + 'px';*/
}

// This calls the moveBall function every 100ms
setInterval(moveBall, 100);