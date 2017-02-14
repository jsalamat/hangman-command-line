var inquirer = require('inquirer')
var Word = require('./Word.js');

var words = ['mario', 'megaman', 'sonic', 'zelda', 'pacman'];



var chosenWord = words[Math.floor(Math.random()*words.length)];

var wordObject = new Word(chosenWord);
wordObject.makeAndPushLettersIntoWord();
console.log(wordObject.display());

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
            console.log('');
            console.log('');
            console.log('=======================================');
            console.log('Can You guest this Videogame Character?');
            console.log('=======================================');
            console.log('');
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
    message: "What letter do you guess? If you are done then say no."},
    ]).then(function(data){
        if (data.guess != 'no') {
            wordObject.updateLetter(data.guess);

            console.log(wordObject.display());

            askLetter();
        } 
    });
}

