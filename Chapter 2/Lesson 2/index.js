/*
*	CHAPTER 2, LESSON 2
*	Loops and Arrays
*/

/*

Loops are an extremely important part of writing code.  Most of what we've covered so far can be reasonably computed by a person.  However, once we get into loops and into doing calculations thousands of times over, it more than most humans (or me, at least) can handle.

The classic loop is the `for` loop, which is constructed as follows:

*/

for(var i = 0; i < 100; i++){
	console.log("On number: " + i);
}

/*

Let's break that down. Inside the parenthesis there are three statements:

1. variable declaraion
2. logical check - the loop stops if this expression is false
3. post-iteration code.  This statement runs after each time the code in the for loop is executed.

*/

/*

Another type of loop that I use ALL the time in javascript is the for/in loop.  This allows to iterate over elements in array which turns out to be super helpful for a variety applications.  See the examples below.

*/

//Array
var deadGOTCharacters = ["Eddard", "Joffrey", "Rob", "That One White Walker"];

for(var deceased in deadGOTCharacters){
	var doICare = deceased != "That One White Walker" && deceased != "Joffrey";
	console.log("Character: " + deceased + ", Do I Care?: " + doICare);
}

/*

You can also use the for/in loop for iterating over the properties of an object!  See the example below, which accomplishes the same functionality as the array example above.

*/

//Object Literal
var doICareMap = {
	"Eddard": true,
	"Joffrey": false,
	"Rob": true,
	"That One White Walker": false
};

for(var name in doICareMap){
	//using the bracket syntax to get the propery
	//if the name were `Eddard`, this would be the same as doICare.Eddard or doICare["Eddard"]
	var doICare = doICareMap[name];
	console.log("Character: " + name + ", Do I Care?: " + doICare);
}


/*
There are other kinds of loops as well - for is the most common, but you can also use "while" and "do/while" loops.  See the examples below.
*/

var numDeadChars = 0;
while (numDeadChars < 10) {
    console.log("I can still take it, bring on the drammatic death sequences.")
    numDeadChars++;
}

do{
	console.log("I feel better now that everyone is coming back to life.");
	numDeadChars--;
}while(numDeadChars > 0)

/*
Basically, the while loop checks to see if it should keep iterating at the beginning of the loop and the do/while loop checks at the end.
*/

/*
Besides these methods, there others which can be exectuted directly on arrays.  The most common of these is the forEach function.  As we covered in Chapter 1, functions are first-order objects in Javascript, which means you easily pass them around as arguments.  

The forEach function takes one argument, a function which get passed an element of the array and exectured for each element in the array.  Check out the example code below:
*/


var movies = ["Casanova", "The Matrix", "Independence Day", "Step Up 2: Step Up 2 the Streets", "Jurassic Park"];
movies.forEach(function(movie){
	if(movie != "Step Up 2: Step Up 2 the Streets"){
		console.log("Consider watching this one?: " + movie);
	}
});

//in this case, we pass the forEach function an anonymous (undeclared) function.
//You also pass declared functions, which can be super useful sometimes.

var badTasteFilter = function(movie){
	if(movie == "Step Up 2: Step Up 2 the Streets"){
		console.log("O.M.G.  I can't wait to watch: " + movie);
	}
};

movies.forEach(badTasteFilter);

/*

Quick primer on some other array methods.  Just like you can use forEach to read the contents of an array, you can also modify the contents of an array via accessors and functions.

To modify an element at a given index, just use the index number to set the value.

*/

var bestGamesEver = ["Portal", "Portal 2", "Chrono Trigger", "Pokemon", "Shadow of the Colossus"];
bestGamesEver[0] = "Super Mario Bros.";
bestGamesEver[3] = "Final Fantasy 7";

console.log(bestGamesEver);//will output ["Super Mario Bros.", "Portal 2", "Chrono Trigger", "Final Fantasy 7", "Shadow of the Colossus"]

/*

You can also add items to the end of an array using the `push` function.  It's so easy, see below!

*/

var myHobbies = ["Golfing", "Knitting", "Cooking"];
myHobbies.push("Coding");

console.log(myHobbies); //will output ["Golfing", "Knitting", "Cooking", "Coding"]

/*

There are a bunch more helpful methods you can use to modify arrays, check them out here:

http://www.w3schools.com/jsref/jsref_obj_array.asp

We'll look at more of these later.

*/


/*

Ok, challenge time!  Write a function below called `findEnemyBattleship`.  This function should take one argument, which will be a battleship map of random dimensions in the form of an array of arrays.  0 will indicate the ocean, and 1 will indicated a square that is part of the enermy's battleship.  The enemy's battleship will always occupy 5 spaces. For example, for this map:

0000000000
0001000000
0001000000
0001000000
0001000000
0001000000
0000000000


your function will be passed the following:

*/

var passedMap = [
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,1,0,0,0,0,0,0],
	[0,0,0,1,0,0,0,0,0,0],
	[0,0,0,1,0,0,0,0,0,0],
	[0,0,0,1,0,0,0,0,0,0],
	[0,0,0,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0]
];

/*

Your function should return an array of the x and y coordinates of each square.  These coodinates should be zero-indexed (meaning the first row would be row 0, then 1, 2, 3,etc).  So for the above example, your function should return:

*/

var result = [
	[3, 1],
	[3, 2],
	[3, 3],
	[3, 4],
	[3, 5]
];

/*

Write your answer below.  Good luck, Commodore!

*/

function findEnemyBattleship(dummyMap) {
    console.log(dummyMap);
    var hits = [];
    var x;
    var y;
    var i = 0;
    var j = 0; 
    while (i < dummyMap.length){
        while (j < dummyMap[i].length){
            console.log(dummyMap[i][j]);
            if (dummyMap[i][j] != 0){
                hits.push([j,i]);
            }else{
            }
            j++;
        }
        i++;
    }
    return hits;
}








