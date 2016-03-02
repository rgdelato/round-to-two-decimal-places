var test = require('tape');


var roundToTwoDecimalPlaces = function (num) {

	// your implementation here!

};


test('Testing roundToTwoDecimalPlaces()', function (assert) {

	assert.deepEqual(
		roundToTwoDecimalPlaces(10),
		"10",
		'10 should round to "10"'
	);

	assert.deepEqual(
		roundToTwoDecimalPlaces(1.7777777),
		"1.78",
		'1.7777777 should round to "1.78"'
	);

	assert.deepEqual(
		roundToTwoDecimalPlaces(9.1),
		"9.1",
		'9.1 should round to "9.1"'
	);

	assert.deepEqual(
		roundToTwoDecimalPlaces(1.005),
		"1.01",
		'1.005 should round to "1.01"'
	);

	assert.deepEqual(
		roundToTwoDecimalPlaces(1.004),
		"1",
		'1.004 should round to "1"'
	);

	assert.deepEqual(
		roundToTwoDecimalPlaces(55.555),
		"55.56",
		'55.555 should round to "55.56"'
	);

	assert.deepEqual(
		roundToTwoDecimalPlaces(1.0049999999999999),
		"1",
		'1.0049999999999999 should round to "1"'
	);

	assert.end();
});