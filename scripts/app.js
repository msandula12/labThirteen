angular.module('myApp', [])
.controller('myController', function(){
	var main = this;

	// empty array where random words get added
	main.list = [];

	// list of Words
	main.words = [
		'Hey! ',
		'Mommy! ',
		'Daddy! ',
		'Look! ',
		'Wait! ',
		'My turn! ',
		'Let\'s go! '
	];

	// list of More words
	main.moreWords = [
		'Hey, wait up! ',
		'Can we get ice cream? ',
		'I want that toy! ',
		'That\'s not fair! ',
		'Let\'s play hide and go seek. ',
		'Do I have to go to school? ',
		'I don\'t want to wear that. '
	];

	// list of style classes
	var styles = [
		'style1',
		'style2',
		'style3',
		'style4',
		'style5'
	];

	// randomizer function
	function randomize(thing){
		return Math.floor(Math.random() * thing.length);
	};

	// function for 'Words' button
	main.addWords = function(){
		main.list.push({
			word: main.words[randomize(main.words)]
		})
	};

	// function for 'Words with decoration' button
	main.addWordsWithDecoration = function(){
		main.list.push({
			word: main.words[randomize(main.words)],
			style: styles[randomize(styles)]
		})
	};

	// function for 'More words' button
	main.addMoreWords = function(){
		main.list.push({
			word: main.moreWords[randomize(main.moreWords)]
		})
	};

	// function for 'More words with decoration' button
	main.addMoreWordsWithDecoration = function(){
		main.list.push({
			word: main.moreWords[randomize(main.moreWords)],
			style: styles[randomize(styles)]
		})
	};

});