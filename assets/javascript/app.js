$(document).ready(function() {

	//Define my variables
	var timerCounter = 10;
	var questions = [];
	var questionCounter = 0;

	//Correct/Incorrect questions counter
	var questionCorrect = 0;
	var questionIncorrect = 0;
	var questionUnanswered = 0;

	//Formatting the question object
	function questionsObject(q, c1, c2, c3, c4, a) {
		this.question = q;
		this.choices = [c1, c2, c3, c4];
		this.answer = a;
	}

	//Putting the object(s) into the question array
	questions.push(new questionsObject('Who voices the computer in Star Trek: The Next Generation?',
	'Sandra Bullock', 'Majel Barrett', 'Tina Fey', 'David Livingston', 0 ));

	questions.push(new questionsObject('This is the second question',
	'Sandra Bullock', 'Majel Barrett', 'Tina Fey', 'David Livingston', 1 ));

	questions.push(new questionsObject('This is the third question',
	'Sandra Bullock', 'Majel Barrett', 'Tina Fey', 'David Livingston', 2 ));


	//Startbutton on click event that begins the game
	$('#startButton').on('click', function() {
  		$('#main-panel').empty();
	  			
	  			//Defined a variable to clear timer
	  			var intervalId = setInterval(function() {
				
				//Code that refreshes the number every second
				$('#main-panel').text('Time Remaining: ' + timerCounter);
				
				//Reduce the number of seconds left by 1	
					timerCounter--;

				$('#main-panel').append('<p></p>' + questions[0].question);
	  			$('#main-panel').append('<p id="c1" class="choices"> Sandra Bullock </p>');
	  			$('#main-panel').append('<p id="c2" class="choices"> Majel Barrett</p>');
	  			$('#main-panel').append('<p id="c3" class="choices"> Tina Fey </p>');
	  			$('#main-panel').append('<p id="c4" class="choices"> David Livingston </p>');
				

	  			//OnClick event to stop timer
	  			$('.choices').on('click', function() {
					clearInterval(intervalId); //Stop the timer!!
				});


	  			$('#c1').on('click', function() {
	  				var self = this;
	  				alert('You clicked answer one');

	  				if (0 === questions[0].answer) {
	  					questionCorrect++;
	  					
	  					console.log('Correct');
	  				}
	  				else{
	  					questionIncorrect++;
	  					console.log('In-correct answer');
	  				}
				$(self).prop('disabled', true);
	  			});


	  			$('#c2').on('click', function() {
	  				alert('You clicked answer two');
	  				if (1 === questions[0].answer) {
	  					questionCorrect++;
	  					console.log('Correct');
	  				}
	  				else{
	  					questionIncorrect++;
	  					console.log('In-correct answer');
	  				}

	  			});


	  			$('#c3').on('click', function() {
	  				alert('You clicked answer three');
	  				if (2 === questions[0].answer) {
	  					questionCorrect++;
	  					console.log('Correct');
	  				}
	  				else{
	  					questionIncorrect++;
	  					console.log('In-correct answer');
	  				}

	  			});


	  			$('#c4').on('click', function() {
	  				alert('You clicked answer four');
	  				if (3 === questions[0].answer) {
	  					questionCorrect++;
	  					console.log('Correct');
	  				}
	  				else{
	  					questionIncorrect++;
	  					console.log('In-correct answer');
	  				}

	  			});

	  			

				//Shows the counter

				if (timerCounter === -1){
					alert("Time's Up!");
					clearInterval(intervalId);

					//Logic to reveal correct answer goes here
				}
				console.log(timerCounter);

				
				}, 1000);
	  				
	}); //End of #startButton 'on.click' function

}); //End of Document.ready function