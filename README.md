# tekmexAssert

<b>Using the JavaScript Ninja book’s test functions as a base, make it so that the assert function behaves as the following example: </b>

	// assert used inside and outside test blocks <br/>
	assert(true, “Outside and before the test blocks”);
	test(“TestBlock A”, function(){
		assert(true, “Inside test block A”);
	});
	assert(true, “Outside and after the test block A”);
	test(“TestBlock B”, function(){
		setTimeout(function(){assert(true, “test delayed B”);}, 500);
	});
	assert(true, “Outside and after test block B”);
	



output:
Outside and before the test blocks
TestBlock A
Inside test block A
Outside and after the test block A
TestBlock B
test delayed B
Outside and after test block B
