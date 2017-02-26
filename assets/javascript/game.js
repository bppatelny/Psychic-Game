var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];

  var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)

document.onkeypress = function(event) {
    var userGuess = event.key;
    guessedLetters.push(userGuess);

    if(userGuess === computerChoice){
        wins++;
        alert('You Win!');
        guessedLetters = [];
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++;
        alert('You Lost!');
        guesses = 10;
        guessesLeft = 10;
        guessedLetters = [];

    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guessLeft').innerHTML = "Guesses Left: " + guesses;
    document.getElementById('guessedLetters').innerHTML = "Guessed Letters: " + guessedLetters.toString();

}  