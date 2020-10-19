//Written (in part) by David A.
const gameContainer = document.getElementById("game");
var score = 0;
var topScore = JSON.parse(localStorage.getItem("topScore"));
const scoreDisplay = document.querySelector("#score");
scoreDisplay.innerText = `Current Score: ${score}   Top Score: ${topScore}`;
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  const active = document.querySelectorAll(".active");
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  if (document.querySelectorAll(".active").length < 3){
      event.target.classList.add("active");};
  if(document.querySelectorAll(".active").length > 1){
    if(document.querySelectorAll(".active")[0].className === document.querySelectorAll(".active")[1].className){
      document.querySelectorAll(".active")[1].classList.add("solve");
      document.querySelectorAll(".active")[0].classList.add("solve");
      document.querySelectorAll(".active")[1].classList.remove("active");
      document.querySelectorAll(".active")[0].classList.remove("active");
      score = score + 100;
      scoreDisplay.innerText = `Current Score: ${score}   Top Score: ${topScore}`;
      if (document.querySelectorAll(".solve").length === 10){
         alert(`You've Won The Game with a score of ${score}, did you beat your top score?`);
         scoreDisplay.innerText = `Current Score: ${score},   Top Score: ${topScore}`;
        };     
      if (score > topScore){
        localStorage.setItem("topScore", JSON.stringify(score))
      }
    }
    else { 
      score = score - 25;
      scoreDisplay.innerText = `Current Score: ${score}   Top Score: ${topScore}`;
      setTimeout(function(){
      document.querySelectorAll(".active")[1].classList.remove("active");
      document.querySelectorAll(".active")[0].classList.remove("active");}, 1000)
    };
    };
};

// when the DOM loads
createDivsForColors(shuffledColors);

//call the clicked divs


//handles matches/not matches

