/*
	Syntax for variable declartion
	ignore []
	[declaration] [identifier] = [value];
	declaration is var, let, or const
	identifier is what you name the variable
	value is what you assign to the variable

	rules for identifiers
	- names contain letters, digits, underscores, and dollar signs
	- names must beging with a letter
	- names can also start with $ or _
	- name are case sensitive Y and y are different
	- Reserved keywords cannot be used as names

	Javascript Data Types
	1.) Numbers
	2.) Strings
	3.) Booleans
	4.) Undefined
	5.) Null
	6.) Symbol
	7.) Objects

*/

//Lesson Examples
var a; //undefined variable

var day = 'Sunday'; //string
let name = 'John Smith'; //string
let time = '10:45 PM'; //String
let shouldSleep = true; //Boolean 
const foot = 12; //number

//Reassign the value of variables
a = day; //assigning a variable to another variable
day = 'Monday';
name = 'Bob Belcher';
time = '6:45 AM';
shouldSleep = false;

foot = 11; //reassign foot gets and error since its a constant








