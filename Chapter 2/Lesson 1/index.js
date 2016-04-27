/*
*	CHAPTER 2, LESSON 1
*	Highly Logical
*/

/*
At the end of the day, all programming boils down to a series of yes/no, true/false, 1/0 decisions.
Let's explore how to make some of those decisions in javascript

The basic logic operators are:

==   equal by value
===  equal by value and type
!=   not equal by value
!==  not equal by value and by type
<    less than
<=   less than or equal to
>    greater than
>=   greater than or equal to


You've probably seen most of these before, but let's cover each anyways.  The easiest way is to provide some simple examples

*/

var x = 5;

//equal by value examples
x == 5;//true
x == 8;//false
x == "5" //true

//equal by value and type
x === 5;//true
x === "5";//false

//not equal by value
x != 8;//true
x != "5";//false

//not equal by value and by type
x !== 8;//true
x !== 5;//false
x !== "5";//true

//greater than
x > 8;//false
x > 2;//true

//greater than or equal to
x >= 6;//false
x >= 5; //true
x >= 4;//true

//less than
x < 8;//true
x > 2;//false

//less than or equal to
x <= 6;//true
x <= 5; //true
x <= 4;//false


/*
You combine logical expressions as well, using the following:

&& and
|| or
! not

*/

/*

You can use these operators in a varierty of places, the most basic of which is `if` statements
*/

if(x < 6  && x == "5"){
	console.log("It's true!");
}

/*
You can also string to together if statements to handle a variety of different logical cases, using the else if and else keywords.
*/

var powerLevel = Math.random() * 10000;

if(powerLevel < 3000){
	console.log("I totally got this");
}else if (powerLevel < 9000){
	console.log("Ok, this might be a bit challenging");
}else{
	console.log("It's over 9000!!!!!!!!!!!!!!!!!");
}

/*
You can also use the ternary operator, which follows this pattern:
condition ? valueIfTrue : valueIfFalse

This is primarily used during variable assignments.  See below for some examples.
*/ 

var numberOfCats = 3;
var numberOfHumans = 2;

var jamieStatus = numberOfCats > numberOfHumans ? "cat-lady" : "normal-person";

console.log(jamieStatus);//will output "cat-lady"

/*

Another useful way to make logical decisions is the switch statement.  Switch statements take a single value and allow you to check if it matches a series of cases.  You can even specify a "default" case which will match any value input.  The key with switch statements is to include the "break" keyword after your code for each case.  This will cause the interpreter to exit the switch statement.  If you forget to include the "break" keyword, the statement will keep executing and if you specified a "default" case it will execute, which may cause unexpected behaviour. 

See below for an example of the switch statement

*/

switch(jamieStatus){
	case "cat-lady":
		//this code will execute if jamieStatus == "cat-lady"
		console.log("Jamie has more cats than people in her house.  And that's awesome.");
		break;//this exits the switch statement
	case "normal-person":
		console.log("Jamie has more people than cats in her house.  And thats cool too.");
		break;
	default:
		console.log("Jamie's status doesn't match the previous two!");
		break;
}

/*
Now for your challenge!  Write a function called `getCharCategory` that takes a random letter or number as an argument.  Your challenge is to use the logical statements above to determine which of the follow conditions the character meets:

* consonant
* vowel
* number-lower-than-five
* number-five
* number-greater-than-five

Your function should return one of the text strings listed above, depending on the logical category for the character passed to the function.  (And NO, `y` is NOT a vowel...honestly...)
*/





