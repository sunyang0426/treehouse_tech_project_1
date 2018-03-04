// event listener to respond to "Show another quote" button clicks /
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote,
false);

var message = ''; 
var red; 
var green; 
var blue; 
var viewedQuotes =[];

function print(quote) {    
	 var outputDiv = document.getElementById('quote-box');     
	 outputDiv.innerHTML = quote; 
}

/*Function to get a random object from quotes array and store in variable
 randomQuote */

 function getRandomQuote () {
 	var randomQuote = Math.floor(Math.random() * quotes.length);

 	var splicedQuote = quotes.splice(randomQuote, 1)[0];
 	viewedQuotes.push(splicedQuote);
 	if ( quotes.length === 0 ) {
 		quotes = viewedQuotes;
 		viewedQuotes = [];
 	}
 	return splicedQuote;

 }

//Function to genereate random rgb color value

function randomColorGenerator (){
	var randomColor;

	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

// Function to take previously selected random object from array 
// print to screen
function printQuote (){
	// On click event, function printQuote runs, 
	// then fires the getRandomQuote function	
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.text + '</p>';
	message  += '<p class="source">' + quotes.source;
	message += '</span><span class="year">' + quotes.year + '</span></p>';




    print(message);     
    //Generate random color     
    randomColorGenerator();
	//Update background with new random color
	document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator(); 

}















