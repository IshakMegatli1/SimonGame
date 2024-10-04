// alert("hello i am Ishak");
const buttonColours = ["red","blue","green", "yellow"];
var gamePattern = [];
const sounds = {
    blue: new Audio('../sounds/blue.mp3'),
    green: new Audio('../sounds/green.mp3'),
    red: new Audio('../sounds/red.mp3'),
    yellow: new Audio('../sounds/yellow.mp3'),
    wrong: new Audio('../sounds/wrong.mp3')
};
var userClickedPattern = [];
var startedToToggle = false;
var level = 0;

$(document).keydown(function() {
    if (!startedToToggle) {
        $("#level-title").text("Level " + level);
        nextSequence();
        startedToToggle = true; 
    }
});

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour); //.push adds an element at the end of an array 

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}


$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    console.log("user clicked", userChosenColour);

    userClickedPattern.push(userChosenColour);
    console.log("user clicked", userClickedPattern);

    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});


function playSound(name){
    sounds[name].play();

}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
 
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    if(gamePattern[currentLevel] !== userClickedPattern[currentLevel]) {
        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}


function startOver(){
    level = 0;
    gamePattern = [];
    startedToToggle = false;
}
