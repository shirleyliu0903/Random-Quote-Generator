 $(document).ready(function() {

  	var fakeQuotes = ["Hi", "Bye", "Why", "Lie" ];

  	function myQuote() {
  		var num = Math.floor(Math.random() * fakeQuotes.length);
  		return fakeQuotes[num]; 
  	};
  	
  	console.log(Math.floor(0.4))

 	$("#getQuote").click(function() {
 		$("#quotes").text(myQuote());
	});

    
 });

