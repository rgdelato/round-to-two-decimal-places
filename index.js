var test = require('tape');


/**
 * roundToTwoDecimalPlaces
 * @param  {Number} num
 * @return {String}
 */
var roundToTwoDecimalPlaces = function (num) {

	// your implementation here!

};


test('Testing roundToTwoDecimalPlaces()', function (assert) {

	assert.equal(
		roundToTwoDecimalPlaces(10),
		"10",
		'10 should round to "10"'
	);

	assert.equal(
		roundToTwoDecimalPlaces(1.7777777),
		"1.78",
		'1.7777777 should round to "1.78"'
	);

	assert.equal(
		roundToTwoDecimalPlaces(9.1),
		"9.1",
		'9.1 should round to "9.1"'
	);

	assert.equal(
		roundToTwoDecimalPlaces(1.005),
		"1.01",
		'1.005 should round to "1.01"'
	);

	assert.equal(
		roundToTwoDecimalPlaces(1.004),
		"1",
		'1.004 should round to "1"'
	);

	assert.equal(
		roundToTwoDecimalPlaces(55.555),
		"55.56",
		'55.555 should round to "55.56"'
	);

	assert.equal(
		roundToTwoDecimalPlaces(1.004999999999999),
		"1",
		'1.004999999999999 should round to "1"'
	);

	assert.equal(
		roundToTwoDecimalPlaces(1.50),
		"1.5",
		'1.50 should round to "1.5"'
	);
	
	assert.end();
});
