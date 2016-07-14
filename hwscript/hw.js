function one(er){
	console.log(er);
}
one("hello")
function two(el){
	console.log(el);
}
two("Doing")
function three(ef){
	console.log(ef);
}
three("fine")
a = 24;
//a is an example of a variable. Variables are used as equivalents for data
// To enter a comment on a Java Script file, just put //
b = 16;
// The 16 is of the data type number. Data types are used for variables.
console.log(a+b);
c = ("sw");
d = ("ag");
console.log(c+d);
var mavericks = ["Boomer Kuwanger", "Magma Dragoon", "Flame Hyenard"];
//This is an array. Arrays can hold many strings of data under the same category, such as names or flavors
var robotmasters = ["Metal Man", "Sword Man", "Ice Man"];
var MegaManCharacters= [mavericks, robotmasters];
console.log(MegaManCharacters[0][0]);
//This is an example of the debug console.log, which adds text to the console. The console lists that data and can be accessed by holding option, command, and j
console.log(MegaManCharacters[1][2]);
e = 11
if (e < 10){
// This is testing, where it compares values to see if they are greater, less, or equal
//This is also an example of logic, which controls the flow of programming
	console.log("e is smaller than 10");
} else{
	console.log("e is larger than 10");
}
function no(ALPH){
// Functions encapsulate code to used another time
	alert (ALPH);
//This is an example of the debug alert, which will cause a message to come up when you enter a site
}
no("You have entered the name ALPH");