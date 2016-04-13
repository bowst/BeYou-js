/*
*	CHAPTER 1, LESSON 4
*	Object Properties
*/

/*
In the last lesson, we learned about the different types of objects.

Objects are essentially collections of properties and functionality; in this lesson, we're going to look at how to create objects in javascript and add properties to them.  There are two main methods of creating objects in javascript: using a constructor or declaring an "object literal";

The easiest way to create an object is using an object literal.  The declarations use curly braces to encompass a collection of properties and form an object. For example:

*/
var myObjectLiteral = {
	property1: "value of property1"
};

/*
Once an object is declared, you can easily access, add to, or modify it's properties by using dot notation, see the example below:
*/

console.log(myObjectLiteral.property1);//will output 'value of property1'
myObjectLiteral.property1 = "I'm changing this value, and there's nothing you can do about it!";
console.log(myObjectLiteral.property1);//will output 'I'm changing this value, and there's nothing you can do about it!'

console.log(myObjectLiteral.property2);//will output 'undefined'
myObjectLiteral.property2 = "energy is property of matter!";
console.log(myObjectLiteral.property2);//will output 'energy is a property of matter'

/* 

When using a constructor, you are creating a new instance of a pre-existing class.  This is called 'instantiating' an object.  What's a class you might be asking?  A class is basically a blueprint or template or set of instructions to build a specific type of object.  Think of a class like stencil, and instantiation like laying stencil over a piece of paper filling it in.  The resulting pattern on the paper would be the object and an "instance" of that class.

In this way, you could create series of object made from same template but with small differences between them (for example, might color in one with blue marker and another with red marker).  You can expect certain things to be exact same between them (such as the size and shape) but certain details might not be same (such as the color).

Instantiating an object by declaring an new instance of class in javascript looks something like this:
*/

var myNewObject = new Object();

/*
And you can use dot notation just like with object literals to modify an object properties
*/
myNewObject.property1 = "value of property1";
console.log(myNewObject.property1);//will output 'value of property1'

/*

Does that look familiar?  You might recall the 'b' variable from Chapter 1, Lesson 3.  In that case, the variable 'b' was set to an instance of the built-in String class.  There are all types of classes built-in to javascript, including Date, RegEx, and Array.

Now it's your turn to get instantiating!  Create two object below, one using literals and the other using a constructor.

Give each object a property called `title` and for the literal object set it equal to "Moby Dick" and for the instantiated object set it equal to "Moby Lick";

Add another property to each called `numberOfPages` and set it to 100 and 101, respectively.

If you need a hand, check out this great resource: http://www.w3schools.com/js/js_object_definition.asp
*/

var literalBook = /* your answer */;

var instantiatedBook = /* your answer */;





