angular.module('myApp', [])
.controller('myController', ['$interval', function($interval){
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

	// declares timer variables
	var timer1, timer2, timer3, timer4;

	// functions automatically fire on page load without any buttons being clicked
	main.madnessEnsues = function(){
		timer1 = $interval(main.addWords, 300);
		timer2 = $interval(main.addWordsWithDecoration, 400);
		timer3 = $interval(main.addMoreWords, 500);
		timer4 = $interval(main.addMoreWordsWithDecoration, 600);
		document.getElementById('madnessBtn').style.display = 'none';
		document.getElementById('stopBtn').style.display = 'block';
	};

	// stops functions from running automatically
	main.stopIt = function(){
		if (angular.isDefined(timer1, timer2, timer3, timer4)) {
			$interval.cancel(timer1);
			$interval.cancel(timer2);
			$interval.cancel(timer3);
			$interval.cancel(timer4);
		}			
		document.getElementById('madnessBtn').style.display = 'block';
		document.getElementById('stopBtn').style.display = 'none';		
	};

}]);