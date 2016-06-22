/*
* consonant
* vowel
* number-lower-than-five
* number-five
* number-greater-than-five
*/

var savedCoords;
function generateBoard(){
	var width = Math.floor(Math.random() * 20);
	width = width > 5 ? width : 5;

	var height = Math.floor(Math.random() * 20);
	height = height > 5 ? height : 5;

	var map = [];

	for(var h = 0; h < height; h++){
		var row  = [];
		for(var w = 0; w < width; w++){
			row.push(0);
		}
		map.push(row);
	}

	var startX = Math.floor(Math.random() * (width - 10)) + 5;
	var startY = Math.floor(Math.random() * (height - 10)) + 5;
	var vertical = width % 2  == 0;

	var coords = [];
	if(vertical){
		for(var i = 0; i < 5; i++){
			coords.push([startY + i, startX]);
		}
	}else{
		for(var i = 0; i < 5; i++){
			coords.push([startY, startX + i]);
		}
	}
	savedCoords = coords;
	coords.forEach(function(location){
		map[location[0]][location[1]] = 1;
	});

	return map;
}

/*
var findEnemyBattleship = function(){
	var result = [];

	savedCoords.forEach(function(coords){
		result.push([coords[1], coords[0]]);
	});
	return result;
}
*/

QUnit.test( "Chapter 2, Lesson 2 - Loops and Arrays", function( assert ) {
	var map = generateBoard();

	var coords = findEnemyBattleship(map);
	console.log("response");
	console.log(coords);

	assert.ok(coords && Object.prototype.toString.call(coords) === '[object Array]' , "findEnemyBattleship returned an array");
	assert.ok(coords.length == 5 , "findEnemyBattleship returned five coordinates");
	var testNum = 1;
	coords.forEach(function(location){
		assert.equal(map[location[1]][location[0]], 1, "Square " + testNum + " is a hit!");
		testNum++;
	});
});