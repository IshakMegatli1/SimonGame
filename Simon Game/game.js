// alert("hello i am Ishak");
const buttonColours = ["red","blue","green", "yellow"];
const gamePattern = [];
const sounds = {
    blue: new Audio('../sounds/blue.mp3'),
    green: new Audio('../sounds/green.mp3'),
    red: new Audio('../sounds/red.mp3'),
    yellow: new Audio('../sounds/yellow.mp3')
};




function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour); //.push adds an element at the end of an array 

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    sounds[randomChosenColour].play();
}

