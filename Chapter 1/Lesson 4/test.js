//

QUnit.test( "Chapter 1, Lesson 4 - Object Properties", function( assert ) {
  assert.ok(literalBook && typeof literalBook == "object", "literalBook is an object");
  assert.equal(literalBook.title, "Moby Dick", "literalBook title set correctly");
  assert.equal(literalBook.numberOfPages, 100, "literalBook numberOfPages set correctly");
  assert.ok(instantiatedBook && typeof instantiatedBook == "object", "instantiatedBook is an object");
  assert.equal(instantiatedBook.title, "Moby Lick", "instantiatedBook title set correctly");
  assert.equal(instantiatedBook.numberOfPages, 101, "instantiatedBook numberOfPages set correctly");
});