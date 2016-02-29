angular.module('sixYearOldSim', [])
.controller('myController', function(){
	var main = this;

	main.words = [
		'Mine! ', 
		'Lego ', 
		'Mommy! ', 
		'Pizza ', 
		'Juice ', 
		'Tired ', 
		'No ',
		'Wait ',
		'Minecraft ',
		'Gross '
	];

	main.moreWords = [
		'Can we have a pet dinosaur? ', 
		'I want cookies for dinner! ', 
		'He won\'t share with me! ', 
		'My turn to play video games! ', 
		'Look how fast I can run! ', 
		'Ewwww! Look at this! ', 
		'Let\'s go to DisneyWorld! ',
		'Ooh, I wanna try! ',
		'Can we keep it? ',
		'Can we get ice cream? '
	];

	var decorations = [
		'styleWords1',
		'styleWords2',
		'styleWords3',
		'styleWords4',
		'styleWords5',
		'styleWords6',
		'styleWords7',
		'styleWords8',
		'styleWords9',
		'styleWords10'
	];

	function randomWords(){
		return Math.floor(Math.random() * main.words.length);
	};
	function randomDecorations(){
		return Math.floor(Math.random() * decorations.length);
	};
	function randomMoreWords(){
		return Math.floor(Math.random() * main.moreWords.length);
	};
	function addDecoration(){
		return decorations[randomDecorations()];
	};

	main.display = [];
	main.randomDecoration = '';

	// function generates words
	main.addWords = function(){
		main.display.push({
			word: main.words[randomWords()]
		})
	};

	// function generates words with decoration
	main.addWordsWithDecoration = function() {
		main.display.push({
			word: main.words[randomWords()],
			class: addDecoration()
		})
	};

	// function generates more words
	main.addMoreWords = function() {
		main.display.push({
			word: main.moreWords[randomWords()]
		})
	};

	// function generates more words with decoration
	main.addMoreWordsWithDecoration = function() {
		main.display.push({
			word: main.moreWords[randomWords()],
			class: addDecoration()
		})
	};
});