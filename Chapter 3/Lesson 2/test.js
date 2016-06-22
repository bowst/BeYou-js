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
	}
];



QUnit.test( "Chapter 3, Lesson 2 - Filter out the nonsense", function( assert ) {
	var results = filterOutOverdue(testBooks);
	assert.ok(results && results.length > 0, "Function returned a valid array");
	assert.ok(typeof results[0] == "object", "Items in array are valid objects");
	assert.ok(results != testBooks, "Function did NOT sort the passed array");

	var today = new Date();
	//filter out books that are not overdue
	var answer = testBooks.filter(function(book){
		var dueDate = new Date(book.dueDate);
		return dueDate < today;
	});
	console.log(answer);
	assert.deepEqual(results, answer, "Final check to make sure everything is 100% correct");

});