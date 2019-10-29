//program data:
var number=Math.floor(Math.random()*100);
var guess;
var limit=5;
var won=false;
var guesses=[];

//game control loop - iterates for each try:
for (var i=1; i <= limit; i++){
    //prompt user for their guess:
    do{
        guess=parseInt(window.prompt("Please guess a number:"));
     } while (isNaN(guess) || isPreviousGuess(guess));
    //if correct: let the user know they won:
    if (guess==number){
        document.write("Correct answer! You Won!");
        won=true;
        break;
    }
    //if incorrect: let the user know:
    else{
        guesses[i]=guess;
        alert("Incorrect answer. Try again! \nYou have guessed: " + guesses.toString() + "\nTries reamining:" + (limit-i));
    }
}

//if the user ran out of tries, let them know the game is over:
if(!won){
    document.write("Sorry, you ran out of the tries. Game over. <br> The correct number was: " + number);
}

//function of the user's guess has already been guessed:
function isPreviousGuess(){
    for (var i=1; i<guesses.length; i++){
        if (guesses[i]==guess){
            return true;
        }
    }
    return false;
}