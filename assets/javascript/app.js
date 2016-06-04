$(document).ready(function() {

	var counter = 10;
	var questions = [];

	function questionsObject(q, c1, c2, c3, c4, a) {
		this.question = q;
		this.choices = [c1, c2, c3, c4];
		this.answer = a;
	}

	questions.push(new questionsObject('Who voices the computer in Star Trek: The Next Generation?',
	'Sandra Bullock', 'Majel Barrett', 'Tina Fey', 'David Livingston', 1 ));


	$('#startButton').on('click', function() {
  		$('#main-panel').empty();
	  			
	  			var intervalId = setInterval(function() {
				
				//Code the refreshes the number every second
				//Reduce the number of seconds left by 1
				
				$('#main-panel').text('Time Remaining: ' + counter);
					counter--;




				$('#main-panel').append('<p></p>' + questions[0].question);
	  			$('#main-panel').append('<p id="c1" class="choices"> Sandra Bullock </p>');
	  			$('#main-panel').append('<p id="c2" class="choices"> Majel Barrett</p>');
	  			$('#main-panel').append('<p id="c3" class="choices"> Tina Fey </p>');
	  			$('#main-panel').append('<p id="c4" class="choices"> David Livingston </p>');
				
	  			// $('.choices').on('click', function() {
	  			$('#c1').on('click', function() {
	  				alert('Choices has been clicked.');

	  			});



				//Shows the counter

				if (counter === -1){
					alert("Time's Up!");
					clearInterval(intervalId);

					//Logic to reveal correct answer goes here
				}
				console.log(counter);

				
				}, 1000);

	}); //End of #startButton 'on.click' function

}); //End of Document.ready function