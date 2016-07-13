Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}

Date.prototype.addHours = function(h) {
   this.setTime(this.getTime() + (h*60*60*1000));
   return this;
}



QUnit.test( "Chapter 3, Lesson 4 - The Overdue Menance", function( assert ) {

    var test1 = new Date();
    test1 = test1.addDays(-4);

    var test2 = new Date();
    test2 = test2.addHours(2);

    var test3 = new Date();
    test3 = test3.addDays(-5);

    var test4 = new Date();
    test4 = test4.addDays(-20);
    test4 = test4.addHours(-23);

    var test1result = getDaysOverdue(test1.toISOString());
	assert.ok(typeof test1result ==='number' && (test1result % 1) === 0, "Function returned an integer when passed a date in the past");
	assert.equal(getDaysOverdue(test2.toISOString()), null, "Function returns null when passed a date in the future");
	assert.equal(getDaysOverdue(test3.toISOString()), 5, "Function return number of days overdue");
    assert.equal(getDaysOverdue(test4.toISOString()), 20, "Function rounds down the number of days overdue");
});
