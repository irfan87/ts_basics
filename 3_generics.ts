// generics
function myFunctionTest<T>(input: T): T {
	return input;
}

const result = myFunctionTest({
	name: "james",
});

const result2 = myFunctionTest({ isWorking: false });

const result3 = myFunctionTest<{
	name: string;
	isWorking?: boolean;
}>({
	name: "dope",
});

const result4 = myFunctionTest<{
	name: string;
	isWorking?: boolean;
}>({
	name: "dangggg",
	isWorking: true,
});

console.log(result);
console.log(result2);
