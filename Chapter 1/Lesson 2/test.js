//

QUnit.test( "Chapter 1, Lesson 2 - Introduction to Variables", function( assert ) {
  assert.equal(typeOfA, "string", "Got the type of variable `A`");
  assert.equal(typeOfB, "number", "Got the type of variable `B`");
  assert.equal(typeOfC, "boolean", "Got the type of variable `C`");
  assert.equal(typeOfD, "undefined", "Got the type of variable `D`");
  assert.equal(typeOfE, "object", "Got the type of variable `E`");
});