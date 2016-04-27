/*
*	CHAPTER 2, LESSON 3
*	Moar Loops and Arrays
*/


/*

That's right!  Arrays and loops are so important to writing code, we're going to spend even MORE time with them!

First up, if you haven't already already review some of awesome array methods available in javascript, please check them out here: http://www.w3schools.com/jsref/jsref_obj_array.asp


Done skimming?  It's important to note that some array functions modify the existing array while other create a NEW array, leaving the original array un-modified.

For example, the "push" and "concat" functions both add items to the array but have different behaviour with regards to whether or not they modify the original array.

*/

var testArray1 = ["a", "b", "c", "d"];
//push returns the length of the array after adding the item
var result1 = testArray1.push("e");

console.log(testArray1); //will output ["a", "b", "c", "d", "e"]
console.log(result1);//will output 5

var testArray2 = ["a", "b", "c", "d"];
//concat creates a new array and returns it
var result2 = testArray2.concat("e");

console.log(testArray2);// will output ["a", "b", "c", "d"]
console.log(result2); //will output ["a", "b", "c", "d", "e"]


/*

Another really useful function is "map", which let's you transform each element in an array by passing it through a function.  What if, given an array of objects representing players and each player had an array of their game scores, you wanted an array of each player and their highest score?  The map function would be super useful here.  Check it out below.

*/

var players = [
	{
		name: "CalvinBall243",
		scores: [100, 12, 352334]
	},
	{
		name: "NewsJunkie123",
		scores: [2342314, 121231, 436324]
	},
	{
		name: "GOTSuperFan",
		scores: [123, 432, 1341]
	}
];

var playersWithHighScore = players.map(function(player){
	player.scores.sort();
	var lastIndex = player.scores.length - 1;
	return {
		name: player.name,
		highScore: player.scores[lastIndex]
	};
});

console.log(JSON.stringify(playersWithHighScore));
console.log(JSON.stringify(players));

/*

Note how I used the sort method to arrange the scores.  Checkout the output from console.log(players).  Since the sort method modifies the existing array, the score array of scores for each player is now sorted.  In this case, there's no harm there but if the order mattered this might not be such a good idea.

If I wanted to preserve the order of the original array, I might create a copy of the scores array and then sort that.  Let's look at how that might look.

*/

players = [
	{
		name: "CalvinBall243",
		scores: [100, 12, 352334]
	},
	{
		name: "NewsJunkie123",
		scores: [2342314, 121231, 436324]
	},
	{
		name: "GOTSuperFan",
		scores: [123, 432, 1341]
	}
];

playersWithHighScore = players.map(function(player){
	/*
		Here we simply declare an empty array with `[]` and then concatenate the items in the player's score array. This creates a copy of the array that we safely modify without affecting the original list of scores
	*/
	var scoresCopy = [].concat(player.scores);
	
	scoresCopy.sort();
	var lastIndex = scoresCopy.length - 1;
	return {
		name: player.name,
		highScore: scoresCopy[lastIndex]
	};
});

console.log(playersWithHighScore);
console.log(players);



/*

Time for a challenge!  For this one, we're going to pay a visit to our local public library where they've got a problem.  The library is having trouble keeping track of all the books they've loaned out due to the high volume.  They've got a long list of books, and they need to figure out which books are overdue and notify the patron of their overdue books.

Your challenge is to write a function called `listOverdue` that makes this a bit more managable.  Write a function that uses a the known list of users (below) and takes a list of books from the library's database and returns a new array with only a single entry for each user who currently has books overdue and an object literal with the number of days each book is overdue.

*/

var knownUsers = [
	{
		userId: 1,
		name: "Harry Potter"
	},
	{
		userId: 2,
		name: "Hermoine Grainger"
	},
	{
		userId: 3,
		name: "Ron Weasley"
	},
	{
		userId: 4,
		name: "Draco Malfoy"
	},
	{
		userId: 5,
		name: "Neville Longbottom"
	}
];

//As an example, if your function were passed the following books:

var books = [
	{
		bookId: 1,
		name: "Potions - A primer",
		checkedOutBy: 4,//this is the user's id
		dueDate: "2016-04-18T13:38:14.855Z"
	},
	{
		bookId: 2,
		name: "Dark Magic for N00bs",
		checkedOutBy: 4,//this is the user's id
		dueDate: "2016-04-10T13:38:14.855Z"
	},
	{
		bookId: 3,
		name: "It's my parents fault: A memoir",
		checkedOutBy: 4,//this is the user's id
		dueDate: "2016-04-21T13:38:14.855Z"
	},
	{
		bookId: 4,
		name: "101 Home Remedies for Chronic Scar Pains",
		checkedOutBy: 1,//this is the user's id
		dueDate: "2016-04-05T13:38:14.855Z"
	},
	{
		bookId: 5,
		name: "The Magical Dictionary",
		checkedOutBy: 2,//this is the user's id
		dueDate: "2016-04-30T13:38:14.855Z"
	}
]

//Your function should return:

var result = [
	{
		userId: 1,
		name: "Harry Potter",
		overdue:{
			"101 Home Remedies for Chronic Scar Pains": 15,//number of days overdue (based on 4/20/2016)
		}
	},
	{
		userId: 4,
		name: "Draco Malfoy",
		overdue:{
			"Potions - A primer": 2,//number of days overdue (based on 4/20/2016)
			"Dark Magic for N00bs": 10
		}
	}
];

/*

A few requirements:

* In order to prioritize, the result array should be sorted in order of the user with the most over due book to the user with the least overdue book
* Note if a user does not have an overdue book, they should not appear on the list
* Your function should NOT modify the orignal list of users OR books
* Number of days overdue should be rounded DOWN to the nearest day (based on today's date and time)
* Your function should ignore books checkout by users that are not on our list of "knownUsers"
* Function should be called `listOverdue`

GOOD LUCK!!

*/









