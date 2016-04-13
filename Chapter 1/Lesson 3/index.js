/*
*	CHAPTER 1, LESSON 3
*	Introduction to Objects
*/

/*
In the last lesson, we learned about the different kinds of primitive variables.

In this lesson, we're going to look at objects in javascript.  In reality, pretty much everything is an object in javascript.  Even primitives can be "coerced` into an object representation (see here: https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/).

That's what let's you do things like:
*/

var test = "BeTrueToYourBowstSelf".length;

console.log("Number of Characters: " + test);//will output 21
/*

As you can see, even though the string "BeTrueToYourBowstSelf" is a primitive value, javascript allows you to treat it like an object for a few key properties.  That object is essentially just a simple wrapper around the primitive value.

In addition to these "wrapper" objects, there a number of other object types, such as:
* object literals, i.e. declarations in brackets 
* arrays
* functions

Let's dive into that a little bit further.  For each of the declarations below, determine the property type.
*/

var a = "abc",
b = new String("abc"),
c = (123).toString(),
d = {},
e = [1,2,3,4],
f = function(){
	return;
};


//Provide your answers below

var typeOfA = /* your answer */;
var typeOfB = /* your answer */;
var typeOfC = /* your answer */;
var typeOfD = /* your answer */;
var typeOfE = /* your answer */;
var typeOfF = /* your answer */;


console.log("Type for variable A: " + typeOfA);
console.log("Type for variable B: " + typeOfB);
console.log("Type for variable C: " + typeOfC);
console.log("Type for variable D: " + typeOfD);
console.log("Type for variable E: " + typeOfE);
console.log("Type for variable F: " + typeOfF);



