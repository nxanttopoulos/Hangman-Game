var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var win = 0;
var losses = 0;
var totalGuesses = 9;
var guessList = [];

document.onkeyup = function(event) {

	var userGuess = event.key;

	var computerGuess = options[Math.floor(Math.random() * options.length)];

if (userGuess === computerGuess) {
	win++;
	totalGuesses=9;
} else {
	totalGuesses--;
	guessList.push(userGuess);
	if (totalGuesses === 0) {
		alert("You Couldn't Get it!");
		losses++;
		totalGuesses=9;
		guessList=[];
	}
}

var game = document.getElementById("game");
game.innerHTML = "Keep on guessing and see how many you can get right!<br><br>Wins: " 
+ win + "<br><br>Losses: " + losses + "<br><br>Guesses Left:" 
+ totalGuesses + "<br><br>Your Guesses So Far: " + guessList;
};