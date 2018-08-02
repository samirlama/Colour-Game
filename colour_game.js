
var quotes = new Array ("red" , "green" , "blue"  , "black", "purple" , "yellow" , "brown" , "aqua" , "pink");
var score = 0;
var randVal;


$(document).ready(function(){
    schuffle(quotes);
    randVal = getRandomVal(quotes);
    
	setRandomVal(quotes);
	setDiv(quotes);
	invocation();


	

});

function invocation(){
	initial = setInterval(function(){
		
		/*var sec = setInterval(function(){
			timer++;
			console.log(timer);
		},1000);
	*/
	
		schuffle(quotes);
    	randVal = getRandomVal(quotes);
		setRandomVal(quotes);
		setDiv(quotes);	
		// clearInterval(sec);

		score--;
		if(score< -2)
		{
			gameOver();
			
		}
		$('.score').text(score);
		

	},5000);
}
function stopInvocation(){
	clearInterval(initial);

	invocation();
}	

//for randomly asigning array values
function schuffle(quotes){
	var currentIndex = quotes.length;
	var tempValue ;
	var randomIndex;
	while(0!==currentIndex){
		randomIndex = Math.floor(Math.random() * quotes.length);
		currentIndex -= 1;
	
	tempValue = quotes[currentIndex];
	quotes[currentIndex] = quotes[randomIndex];
	quotes[randomIndex] = tempValue;

	
}
return quotes;
}


$(document).on('click', '.color' , function(){
			console.log(randVal);
			console.log($(this));
			stopInvocation();
			if($(this).hasClass(randVal))
			{
				score++;
			}
			else{
				score--;
				if(score < -2){
					gameOver();
				}
			}
			randVal = getRandomVal(quotes);
			setRandomVal(quotes);
			$('.score').text(score);
		});

	
function setDiv(quotes)
{
	$div = '';
	quotes.forEach(function(quote,index){
		if(index %3 == 0){
			$div += '<br clear="all"/>';	
		}
		$div += '<span class="'+quote+' color"></span>'; 
	});
	$('.colour_game').empty();
	$(".colour_game").append($div);
}

 function getRandomVal(quotes){
 	return quotes[Math.floor(Math.random() * quotes.length)];	
 }
function setRandomVal(quotes){
	// randVal = quotes[Math.floor(Math.random() * quotes.length)];
	$('#colour_name').html(randVal).css('color',getRandomVal(quotes));
}

function gameOver(){
	alert('Game Over. Play Again?');
	score=0;
	}

