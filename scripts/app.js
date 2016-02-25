var app = angular.module('myModule', []);
// This is declaring a module. More on this in a moment

app.controller('myController', function(){
	var main = this;
	// words list
	main.words = [
		'Boom', 
		'Crash', 
		'Taco', 
		'Indivisible', 
		'Gregarious', 
		'Problematic', 
		'Astute',
		'Kinetic',
		'Frazzled',
		'Binoculars'
	];
	// function generates random word from list
	var wordPicker = main.words[Math.floor(Math.random() * main.words.length)];
	main.randomWord = function() {
		return wordPicker;
	};
	// style classes for words
	main.addStyleToWords = 'styleWords';
	// phrases list
	main.phrases = [
		'Rock the casbah', 
		'Go for it', 
		'Keep on trucking', 
		'Please try again', 
		'I literally can\'t even', 
		'That\'s what she said', 
		'Keep it real',
		'It\'s not you, it\'s me',
		'Show me the money!',
		'Why are you the way that you are?'
	];
	// function generates random phrase from list
	var phrasePicker = main.phrases[Math.floor(Math.random() * main.phrases.length)];
	main.randomPhrase = function() {
		return phrasePicker;
	};
	// style classes for phrases
	main.addStyleToPhrases = [
		'stylePhrases1',
		'stylePhrases2',
		'stylePhrases3',
		'stylePhrases4',
		'stylePhrases5',
		'stylePhrases6',
		'stylePhrases7',
		'stylePhrases8',
		'stylePhrases9',
		'stylePhrases10'
	];
	// function generates random class to apply to phrases
	var stylePicker = main.addStyleToPhrases[Math.floor(Math.random() * main.addStyleToPhrases.length)];
	main.randomClass = function() {
		return stylePicker;
	};
});

// $('button').click(function(event) {
// 	event.preventDefault();
// });