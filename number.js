var target;
var guess_input;
var user_input_text;
var finished = false;
var guesses=0;

function do_game(){
var random_number = Math.random()*100;
var random_number_integer = Math.floor(random_number);
var target = random_number_integer+1;
//alert("the target is "+target);

while(!finished){
	var guess_input_text = prompt("I'm thinking of a number from 1 to 100 \n\n" + "What is the number?");
	guess_input = parseInt(guess_input_text);
	guesses+=1;
	finished = check_guess();
}

function check_guess(){
	if(isNaN(guess_input)){
		alert("The entered value is not a number\n\n" + "Please enter a number from 1 to 100");
		return false;
	}
	if((guess_input<1)||(guess_input>100)){
		alert("The entered number is out of range. \n\n" + "Please enter a number from 1 to 100");
		return false;
	}
	if(guess_input>target){
		alert("Entered value is larger than target");
		return false;
	}
	if(guess_input<target){
		alert("Entered value is smaller than target");
		return false;
	}
	alert("You got it!\n\n" + "The number was " + target + "\n\n You took "+ guesses + " guesses to get it right")
	return true;
}



}