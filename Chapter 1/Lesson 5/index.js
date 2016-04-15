/*
*	CHAPTER 1, LESSON 5
*	Let's get Classy
*/

/*
In the last lesson, we looked at a few ways to create objects.

If you recall, one of the ways was to create a new instance of a class.  Javascript comes with a bunch of super helpful classes built in, such as Date, String, and RegEx.  But you're building a super awesome custom app, and you need more than that!  Let's look into how to create out own classes.

But first, I have to admit something. I haven't been totally honest with you.  While other languages such as C++ and python have full support for classes, javascript does not.  Because it was originally spec'd as a scripting language for minor DOM maniulation in the browser, classes weren't really necesssary.  As it has grown and it's used basically everywhere now, the language is evolving to have better support for "real" classes but most of this functionality isn't yet supported by most major browsers.

That being said, javascript allows us to do basically the same thing using functions.  In this case, the function name is the name of the class, which by convention starts with an uppercase letter.  When called with the `new` keyword, a new instance of the class is created and returned.  See the example below.
*/

function Pet(){

}

var myPet = new Pet();
myPet.name = "Chubs";

//this object has properties
console.log(myPet.name);//will output "Chubs"

//the instanceof operator will check the class or blueprint used to create this object
console.log(myPet instanceof Pet);//will output 'true'
console.log(myPet instanceof Object);//will output 'true'
console.log(myPet instanceof Date);//will output 'false'

/*
Notice how the instance of our Pet class is also an instance of Object.  That's because Object is what's called the base class of all classes in Javascript.

You can also pass parameters to the class to set properties.  For example, if we wanted to set up our a new 'Dog' class to take the name of the dog in the constructor and assign it to the property 'name', we could do something like the following.
*/

function Dog(name){
	this.name = name;
}

var myDog = new Dog("Rover");

console.log(myDog.name);//will output 'Rover'


/*
That's all well and good, but remember, we're building super awesome custom apps, and they need to DO stuff(i.e. execute functions).  We can teach out classes to do things in a couple ways.  The first way is to simply create a property that is function.  Remember, in Javascript functions are treated like any other type of object and can be stored as properties.  For example:
*/

myPet.feed = function(){
	console.log("yum yum, I love to eat food.")
};

//functions are called by adding parenthesis after their property name
myPet.feed();//will output 'yum yum, I love to eat food.' to the console


/*
This has a number of limitations though...what if we want every object we create from the Pet class to have a particular method?  Are we stuck repeatedly declaring basically the same function everytime?  

Enter the special 'prototype' property.  This allows to you add properties and methods by default to every object created with that class.  This methods can even use the properties assigned to the object using the special 'this' keyword which allows an object to access itself (yes, I know that sounded dirty).

For example, if we wanted all of our pets to be able to say hello, we could do something like this:

*/

Pet.prototype.sayHello = function(toWhom){
	console.log("Hello " + toWhom + ", I'm " + this.name);
}

var mySecondPet = new Pet();
mySecondPet.name = "Joe DiMeowggio";
mySecondPet.sayHello("Jamie");//will output 'Hello Jamie, I'm Joe DiMeowggio`


/*

Now it's your turn!  We're really getting into real world stuff here.  Imagine we're writing a reading app and we want to keep track of our books.  Create class called Book which has the following properties:

* title
* author
* numberOfPages
* currentPage
* hasBeenRead

The constructor function should allow this properties to be assigned by passing them to the class constructor in the same order they are laid out above.   If the currentPage is greater than the numberOfPages, the currentPage should be set to 0 and the hasBeenRead property should be set to true

Additionally, the class should have a method called 'turnPage' which adds one to currentPage.  Again, if during this function, the currentPage is greater than the numberOfPages, the currentPage should be set to 0 and the hasBeenRead property should be set to true.

Build your class below, the tests will create an instance of the class ahd check to make sure it meets all of the requireemnts laid out above.

*/




