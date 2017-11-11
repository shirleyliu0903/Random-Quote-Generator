 $(document).ready(function() {

  	var stQuotes = [
  		"\"Mornings are for coffee and contemplation.\" -Chief Hopper", 
  		"\"You shouldn't like things because people tell you you're supposed to.\" -Jonathan", 
  		"\"Why are you keeping the curiosity door locked?\" -Dustin", 
  		"\"Maybe I am a mess. Maybe I'm crazy. Maybe I'm out of my mind.\" -Joyce",
  		"\"You act like you want me to be your friend and then you treat me like garbage.\" -Max",
  		"\"Friends don't lie.\" -Eleven",
  		"\"If anyone asks where I am, I've left the country.\" -Mike"
  		 ];

  	function myQuote() {
  		var num = Math.floor(Math.random() * stQuotes.length);
  		return stQuotes[num]; 
  	};
  	
  	console.log(Math.floor(0.4))

 	$("#getQuote").click(function() {
 		$("#quotes").text(myQuote());;
	    $("#quote-box").fadeOut('slow');
	    $("#quote-box").fadeIn('slow');

	});

    
 });

