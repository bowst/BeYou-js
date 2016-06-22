/*

Write a function called filterUnknownUsers which takes a list of users and books and returns ONLY those books which have a valid user.

This function should NOT alter the original array passed to the function.


Here is an example of the arrays your function might get passed.
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
];

/*
write function below these lines
*/
var filterUnknownUsers = function(users, booksToTest){

};