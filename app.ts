interface Input {
	name: string;
}

function testRun(props: Input) {
	return props;
}

let testRunResult = testRun({ name: "John" });

console.log(testRunResult);
