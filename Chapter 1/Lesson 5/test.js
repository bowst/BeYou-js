//

QUnit.test( "Chapter 1, Lesson 5 - Let's get Classy", function( assert ) {
	
	//Test variable assignments
	var book1 = new Book("Moby Dick", "Herman Melville", 300, 100, true);
	assert.ok(book1, "Can create new instance of Book class");
	assert.equal(book1.title, "Moby Dick", "Title is set correctly");
	assert.equal(book1.author, "Herman Melville", "Author is set correctly");
	assert.equal(book1.numberOfPages, 300, "Number Of Pages is set correctly");
	assert.equal(book1.currentPage, 100, "Current Page is set correctly");
	assert.equal(book1.hasBeenRead, true, "Current Page is set correctly");

	//test currentPage logic on assignment
	var book2 = new Book("Moby Dick", "Herman Melville", 300, 301, false);
	assert.ok(book2.hasBeenRead, "Has Been Read set correctly after passing a higher current page than total pages");
	assert.equal(book2.currentPage, 0, "Current Page reset to 0");

	//test turn page functionality
	var book3 = new Book("Moby Dick", "Herman Melville", 300, 298, false);
	assert.ok(book3.turnPage, "Has turn page function");
	book3.turnPage();
	assert.equal(book3.currentPage, 299, "Current Page is increased after turnPage is called");
	book3.turnPage();
	book3.turnPage();
	assert.equal(book3.currentPage, 0, "Current Page reset to 0 after turnPage is called if greater than the number of pages");
	assert.ok(book3.hasBeenRead, "Has Been Read set to true after turnPage is called if greater than the number of pages");
});