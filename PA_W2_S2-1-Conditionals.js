/*
	Conditionals Conceptual
	
	Javascript Conditionals
	== true, with type conversion
	=== true, exact match only
	!= not equal to
	> greater than
	< less than
	>= greater than or equal to
	<= less than or equal to

	Syntax for Conditional
	
	if Statement
	if(conditional) {
		//code if conditional is true
	}

	else statement
	if(conditional) {
		//code if conditional is true
	} else {
		//code if it does not match true conditional
	}

	else if statement
	if(conditional1) {
		//code if conditional 1 is true
	} else if(conditional2) {
		//code if conditional 2 is true
	} else {
		//code if neither conditional 1 or 2 runs
	}

	Example else statment
	let thing1 = 'tinybasketball';

	if(thing1 == 'tinyBasketball') {
		console.log("It's a tiny basketball.");
	} else {
		console.log("It's not a basketball.");
	}

	Example else if statement
	let thing1 = 'tinybasketball';

	if(thing1 == 'tinyBasketball') {
		console.log("It's a tiny basketball.");
	} else if( thing1 == 'elephant') {
		console.log("It's an elephant.")
	} else {
		console.log("It's not a basketball.");
	}

	Example comparing two variables
	let thing1 = "elephant";
	let thing2 = "elephant";

	if(thing1 == thing2) {
		console.log("They are both elephants");
	} else {
		console.log("They are not the same.");
	}


	Compound Conditional Statements
	AND = && = both conditions are true in order to return true
	OR = || = one or the other can be true and it will return true

	Example using OR 
	let thing1 = 'bird';
	let thing2 = 'dog';

	if(thing1 == thing2) {
		console.log("they are the same");
	} else if (thing1 == 'bird' || thing2 == 'bird') {
		console.log("One of these is a bird.");
	} else {
		console.log('They are different and neither is a bird.');
	}
*/
