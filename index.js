// uses jquery (javascript library )to trigger event handler on key pressing 


var colorSequence = []; //array for storing the sequence of buttons to be pressed
var clickEnabled = true;  // used to control when the user is allowed to click
var level = 0;     // current game level
var currentElement = 0;  // index of current button in array 
var gameOver = false;    // used to determine whether the game is over 

function gameStart() {
  currentElement = 0;  // game starts by clicking on first element of array
  level++; //level increments
  $("h1").text("Level " + level); // update heading to display current level
  var random = Math.floor(Math.random() * 4);  // math.random generates a value between 0 and less than 1 // math.floor takes lower value
                                                // we get values between 0 and 3
  clickEnabled = false;    // no click during sequence display 
  //this switch checks the random generated and every number has a tile assigned which is pushed to the colorSequence
  switch (random) {
    case 0:    // based on the no assign a color to the array 
      colorSequence.push("blue");
      animateButtons("blue");
      addSound("blue");
      break;
    case 1:
      colorSequence.push("green");
      animateButtons("green");
      addSound("green");
      break;
    case 2:
      colorSequence.push("red");
      animateButtons("red");
      addSound("red");
      break;
    case 3:
      colorSequence.push("yellow");
      animateButtons("yellow");
      addSound("yellow");
      break;
  }
}
//this function adds the sound according to the button which is the argument taken in
function addSound(btn) {
  var audio = new Audio("sounds/" + btn + ".mp3");  // assign variable audio an object of Audio class and takes the btn pressed as parameter to create path to audio
  audio.play();
}
//any key pressed will start the game
$("body").keydown(function() {  // sets up jquery eventlistener for keydown--performs function when key is pressed
  if (clickEnabled === true) { //this is a boolean to ensure that game starts once and not everytime there is a keypress
    gameStart();
  }
  if (gameOver === true) {  //resets the game 
    colorSequence = [];
    clickEnabled = true;
    level = 0;
    currentElement = 0;
    gameOver = false;
    $("h1").text("Press A Key to Start");
    console.log(colorSequence);
  }
});
//adds the click event to all the four buttons
$(".btn").click(function(event) {

  // the currentElement shows the button to be pressed next
  if (this.id !== colorSequence[currentElement]) { //if this is not the button that was to be pressed
    addSound("wrong");
    clickEnabled = false;
    gameOver = true;
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press any key to restart");
    setTimeout(function() { //timeout resets the styling
      $("body").removeClass("game-over");
    }, 100)
  } 
  else if (this.id === colorSequence[currentElement]) { //if this was the button to be pressed
    addSound(this.id);
    animateButtons(this.id);
    currentElement++;
    if (colorSequence.length === currentElement) { //whenever the currentElement reaches the last element then start a new level
      setTimeout(function() {
        gameStart(); //new level starts
      }, 1000);

    }
  }


});

//adds the pressed animation to the buttons
function animateButtons(color) {
  $("." + color).addClass("pressed"); //jquery to add pressed animation

  setTimeout(function() {  //revert the animation using timeout
    $("." + color).removeClass("pressed");
  }, 100)
}
