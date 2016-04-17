/*
* consonant
* vowel
* number-lower-than-five
* number-five
* number-greater-than-five
*/

QUnit.test( "Chapter 2, Lesson 1 - Highly Logical", function( assert ) {
	assert.equal(getCharCategory("c"), "consonant", "Check if it can detect consonants");
	assert.equal(getCharCategory("e"), "vowel", "Check if it can detect vowel");
	assert.equal(getCharCategory(3), "number-lower-than-five", "Check if it can detect a number lower than five");
	assert.equal(getCharCategory(5), "number-five", "Check if it can detect the number five");
	assert.equal(getCharCategory(9), "number-greater-than-five", "Check if it can detect a number greater than five");
});