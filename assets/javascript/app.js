$(document).ready(function() {

	var counter = 4;

	$('#startButton').on('click', function() {
  		$('#main-panel').empty();
	  			
	  			var intervalId = setInterval(function() {
				
				//Code the refreshes the number every second
				//Reduce the number of seconds left by 1
				counter--;
				$('#main-panel').html('Time Remaining: ' + counter);
				// $('#startButton').html('' + counter);
				
				//Shows the counter

				if (counter === 0){
					alert("Time's Up!");
					clearInterval(intervalId);

					//Logic to reveal correct answer goes here
				}
				console.log(counter);
				}, 1000);

	  			
	  		$('#main-panel').html( "<p>Test</p>" );
	  		$('#main-panel').html( "<p>Test</p>" );
	  		$('#main-panel').html( "<p>Test</p>" );
	  		$('#main-panel').html( "<p>Test</p>" );



	



	}); //End of #startButton 'on.click' function

}); //End of Document.ready function