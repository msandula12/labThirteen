var app = angular.module('myModule', []);

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

	// phrases list
	main.phrases = [
		'What\'s another word for Thesaurus?', 
		'You can\'t have everything. Where would you put it?', 
		'Everywhere is within walking distance if you have the time.', 
		'It\'s a small world, but I wouldn\'t want to have to paint it.', 
		'A lot of people are afraid of heights. Not me, I\'m afraid of widths.', 
		'Whenever I think of the past, it brings back so many memories.', 
		'Curiosity killed the cat, but for a while I was a suspect',
		'On the other hand, you have different fingers.',
		'All those who believe in psychokinesis raise my hand.',
		'If Barbie is so popular, why do you have to buy her friends?'
	];
	
	// style classes for words
	main.addStyleToWords = 'styleWords';

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
	main.randomClass = function() {
		var stylePicker = main.addStyleToPhrases[Math.floor(Math.random() * main.addStyleToPhrases.length)];
		return stylePicker;
	};

	// function generates random word from list for p1
	main.randomWords = function() {
		var newWord = main.words[Math.floor(Math.random() * main.words.length)];
		$("#display1").append(newWord + "<br /><br />");
	};

	// function generates random word with style from list for p2
	main.randomWordsWithStyle = function() {
		var newWord = main.words[Math.floor(Math.random() * main.words.length)];
		$("#display2").append(newWord + "<br />");
	};

	// function generates random phrase from list for p3
	main.randomPhrases = function() {
		var newPhrase = main.phrases[Math.floor(Math.random() * main.phrases.length)];
		$("#display3").append(newPhrase + "<br /><br />");
	};

	// function generates random phrase with style from list for p4
	main.randomPhrasesWithStyle = function() {
		var newPhrase = main.phrases[Math.floor(Math.random() * main.phrases.length)];
		$("#display4").append(newPhrase + "<br /><br />");
	};
});