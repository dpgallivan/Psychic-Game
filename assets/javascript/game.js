$(document).ready(function() {

	var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
// not sure if this is correct
	var guessedLetters = [];

  for(var i=0; i < options.length; i++){

	document.onkeyup = function() {

		var userguess = String.fromCharCode(event.keycode).toLowerCase();
				
		console.log(userguess);

		var computersPrediction = options[Math.floor(Math.random() * options.length)];
		console.log(computersPrediction);

		if (userguess== options && guessesLeft <= 9) {
			if (userguess == computersPrediction) {
				win++; 
				return;
			}
		}
		if (userguess== options && guessesLeft > 9) {
			if (userguess != computersPrediction) {
				losses++;
				return;
			}
		}
		if (userguess && guessesLeft != computersPrediction){
			guessesLeft--;
		}
		if (guessedLetters == options) {
			system.out.printIn("options");
			if (guessedLetters > 9) {
				return;
			}
		}

		var html ="<p>Guess what letter I'm thinking of:</p>" + 
		"<p>Wins: " + Wins + "</p>" +
		"<p>Losses: " + Losses + "</p>" +
		"<p>Guesses Left: " + Guesses Left + "</p>" +
		"<p>Guessed Letters: " + Guessed Letters + "</p>";

		document.querySelector("#game").innerHTML = html;
	}
  }
});

	
	
