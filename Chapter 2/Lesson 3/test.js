Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}


var today = new Date();


var testBooks = [
	{
		bookId: 1,
		name: "Muggle History 101",
		checkedOutBy: 1,//this is the user's id
		dueDate: today.addDays(-5).toISOString()
	},
	{
		bookId: 2,
		name: "The Book of Charms and Spells",
		checkedOutBy: 2,//this is the user's id
		dueDate: today.addDays(-2).toISOString()
	},
	{
		bookId: 3,
		name: "Guide to Advanced Occlumency",
		checkedOutBy: 5,//this is the user's id
		dueDate: today.addDays(-7).toISOString()
	},
	{
		bookId: 4,
		name: "Jinxes for the Jinxed",
		checkedOutBy: 1,//this is the user's id
		dueDate: today.addDays(3).toISOString()
	},
	{
		bookId: 5,
		name: "Practical Defensive Magic and Its Use Against the Dark Arts",
		checkedOutBy: 3,//this is the user's id
		dueDate: today.addDays(-10).toISOString()
	},
	{
		bookId: 6,
		name: "A Guide to Advanced Transfiguration",
		checkedOutBy: 2,//this is the user's id
		dueDate: today.addDays(-4).toISOString()
	},
	{
		bookId: 7,
		name: "Healing at Home with Herbs",
		checkedOutBy: 5,//this is the user's id
		dueDate: today.addDays(-30).toISOString()
	},
	{
		bookId: 8,
		name: "Notable Magical Names of Our Time",
		checkedOutBy: 2,//this is the user's id
		dueDate: today.addDays(6).toISOString()
	},
	{
		bookId: 9,
		name: "My Life as a Muggle",
		checkedOutBy: 3,//this is the user's id
		dueDate: today.addDays(-4).toISOString()
	},
	{
		bookId: 10,
		name: "Advanced Rune Translation",
		checkedOutBy: 2,//this is the user's id
		dueDate: today.addDays(9).toISOString()
	},
	{
		bookId: 11,
		name: "Advanced Rune Translation",
		checkedOutBy: 9,//this is the user's id
		dueDate: today.addDays(-40).toISOString()
	}
];

var answer = [{"overdue":{"Healing at Home with Herbs":30,"Guide to Advanced Occlumency":7},"userId":5,"name":"Neville Longbottom"},{"overdue":{"Practical Defensive Magic and Its Use Against the Dark Arts":10,"My Life as a Muggle":4},"userId":3,"name":"Ron Weasley"},{"overdue":{"Muggle History 101":5},"userId":1,"name":"Harry Potter"},{"overdue":{"A Guide to Advanced Transfiguration":4,"The Book of Charms and Spells":2},"userId":2,"name":"Hermoine Grainger"}];



QUnit.test( "Chapter 2, Lesson 3 - Moar Loops and Arrays", function( assert ) {
	var results = listOverdue(testBooks);
	console.log(results);

	assert.ok(results && results.length > 0, "Function returned a valid array");
	assert.ok(typeof results[0] == "object", "Items in array are valid objects");
	assert.ok(results[0].userId == 5 , "User with the most overdue book sorted first");	
	assert.ok(results[3].userId == 2 , "User with the least overdue book sorted last");	

	var userIds = results.map(function(user){
		return user.userId
	});

	assert.ok(userIds.indexOf(4) == -1, "User without any overdue books does not appear");
	assert.ok(userIds.indexOf(9) == -1, "Unknown user does not appear");

	assert.ok(results[0].overdue["Guide to Advanced Occlumency"] == 7, "Check #1 that days overdue is correctly");
	assert.ok(results[1].overdue["Practical Defensive Magic and Its Use Against the Dark Arts"] == 10, "Check #2 that days overdue is correctly");
	assert.ok(results[2].overdue["Muggle History 101"] == 5, "Check #3 that days overdue is set correctly");

	assert.ok(knownUsers[0].userId == 1 && knownUsers[4].userId == 5 && !knownUsers[0].overdue, "Spot check that knownUsers array is unmodified");
	assert.ok(books[0].bookId == 1 && books[4].bookId == 5, "Spot check that books array is unmodified");

	assert.deepEqual(results, answer, "Final check to make sure everything is 100% correct");

});