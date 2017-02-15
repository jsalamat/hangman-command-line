var inquirer = require('inquirer')
var Word = require('./Word.js');

var words = ['mario', 'megaman', 'sonic', 'zelda', 'pacman'];
var counter = 20;


var chosenWord;
var wordObject;

function start(){
    console.log('');
    console.log('');
    console.log('======================================');
    console.log('');
    console.log('                T H E');
    console.log('');
    console.log('         G A M E M A S T E R');
    console.log('');
    console.log('           C H A L L E N G E');
    console.log('');
    console.log('======================================');
    console.log('      <its time to play the game>');
    console.log('');
    inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "Game Start: yes or no"},
    ]).then(function(data){
        if (data.guess == 'yes') {
        	counter = 20;
        	chosenWord = words[Math.floor(Math.random()*words.length)];
        	wordObject = new Word(chosenWord);
			wordObject.makeAndPushLettersIntoWord();
			// console.log(wordObject.display());
        	console.log("You can quit anytime say <no>")
            console.log('');
            console.log('');
            console.log('=======================================');
            console.log('Can You guest this Videogame Character?');
            console.log('=======================================');
            console.log('');
            console.log("Guesses Left: " +counter);
            console.log(wordObject.display());
            console.log('');
            askLetter();
        }
    });
}

start();

function askLetter(){
    inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "What letter do you guess?"},
    ]).then(function(data){
        if (data.guess != 'no') {
            wordObject.updateLetter(data.guess);

            console.log("Guesses Left: " +counter);
            console.log(wordObject.display());

            askLetter();
        } if(wordObject.display().indexOf("_") === -1) {
        	console.log("You Won!")
        	console.log(wordObject.display());
        	retry();
        } else {
        	counter--;
        	console.log("Guesses Left: " +counter);
        	console.log(wordObject.display());

        } if (counter == 0) {
        	console.log("You Lose!");
        	console.log(" The word is " + chosenWord);
        	retry();
        }
    });
}

function retry(){
	 inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "Replay yes or no"},
    ]).then(function(data){
    	if (data.guess == 'yes') {
    		counter = 20;
        	chosenWord = words[Math.floor(Math.random()*words.length)];
        	wordObject = new Word(chosenWord);
			wordObject.makeAndPushLettersIntoWord();
			// console.log(wordObject.display());
        	console.log("You can quit anytime say <no>")
            console.log('');
            console.log('');
            console.log('=======================================');
            console.log('Can You guest this Videogame Character?');
            console.log('=======================================');
            console.log('');
            console.log("Guesses Left: " +counter);
            console.log(wordObject.display());
            console.log('');
            askLetter();
        }
    });
}