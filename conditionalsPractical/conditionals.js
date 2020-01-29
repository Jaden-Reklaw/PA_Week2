console.log('Test');

//Variable Declarations
let seatsInCar = 7;
let passengers = 5;
let infants = 1;
let carSeats = 0;
let fullTank = true;

//Check that there's enough room for everyone
if (seatsInCar >= passengers) {
	console.log("There's enough room for everyone.");
} else {
	console.log("There's not enough room for everyone.");
}

//Check for a compound condtional for enough seats for passengers and car seats for infants
if (seatsInCar >= passengers && carSeats >= infants) {
	console.log("There's enough room for everyone and car seats for infants");
} else {
	console.log("There's not enough room for everyone.");
}

//Create an if statement that checkes if there's enough seats for passengers and car seats for infants
//Nest an if statement to check right after if there's enough gas
if (seatsInCar >= passengers && carSeats >= infants) {
	if (fullTank) {
		console.log("There's enough room for everyone and car seats for infants and were gased up");
	} else {
		console.log("We need to gas up for the trip.")
	}
	
} else {
	console.log("There's not enough room for everyone.");
}















