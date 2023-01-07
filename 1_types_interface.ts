interface MyInterface {
	property1: string;
	property2: string;
	property3: string;
}

// return the input
function myReturnFunction(input: MyInterface): MyInterface {
	return input;
}

// if not return the input
function myFunction(input: MyInterface): void {
	input;
}

// extends from MyInterface as a child interface
interface MyInterface2 extends MyInterface {
	property4: string;
}

interface MyInterface3 {
	property5: boolean;
}

interface MyInterface3 extends MyInterface, MyInterface2 {
	property6?: string;
}

// async function
async function myAsyncFuntion(input: MyInterface): Promise<MyInterface> {
	return input;
}

const myReturnFunctionResult = myReturnFunction({
	property1: "this is a test 1 from myReturnFunction",
	property2: "this is a test 2 from myReturnFunction",
	property3: "this is a test 3 from myReturnFunction",
});

const myFunctionResult = myFunction({
	property1: "test 1 from myFunction",
	property2: "test 2 from myFunction",
	property3: "test 3 from myFunction",
});

const myAsyncFuntionResult = myAsyncFuntion({
	property1: "test 1 from myAsyncFunction",
	property2: "test 2 from myAsyncFunction",
	property3: "test 3 from myAsyncFunction",
});

// execute the function that have the extended of MyInterface2
const testRunFunction = (input: MyInterface2): void => {
	input;
};

const testRunReturnFunction = (input: MyInterface2): MyInterface => {
	return input;
};

const testRunAsyncFunction = async (
	input: MyInterface2
): Promise<MyInterface> => {
	return input;
};

const testRunFunctionResult = testRunFunction({
	property1: "first test from testRunFunction",
	property2: "second test from testRunFunction",
	property3: "third test from testRunFunction",
	property4: "forth test from testRunFunction",
});

const testRunReturnFunctionResult = testRunReturnFunction({
	property1: "first test from testRunReturnFunction",
	property2: "second test from testRunReturnFunction",
	property3: "third test from testRunReturnFunction",
	property4: "forth test from testRunReturnFunction",
});

const testRunAsyncFunctionResult = testRunAsyncFunction({
	property1: "first test from testRunAsyncFunction",
	property2: "second test from testRunAsyncFunction",
	property3: "third test from testRunAsyncFunction",
	property4: "forth test from testRunAsyncFunction",
});

console.log(myReturnFunctionResult);
console.log(myFunctionResult);
console.log(myAsyncFuntionResult);
console.log(testRunFunctionResult);
console.log(testRunReturnFunctionResult);
console.log(testRunAsyncFunctionResult);

type MyType = {
	property1: string;
};

// we can extends type as the interface by using '&' symbol
type MyTypeTwo = {
	property2?: number;
} & MyType;

const myAsyncFunctionType = async (input: MyType): Promise<MyType> => {
	return input;
};

const myFunctionType = (input: MyTypeTwo): void => {
	input;
};

const myAsyncFunctionTypeResult = myAsyncFunctionType({
	property1: "test from MyType",
});

const myFunctionTypeResult = myFunctionType({
	property1: "test from MyTypeTwo that inherite from MyType",
	property2: 15,
});

console.log(myAsyncFunctionTypeResult);
console.log(myFunctionTypeResult);

// enums
enum myEnum {
	enumOne = "enumOne",
	enumTwo = "enumTwo",
	enumThree = "enumThree",
}

type MyTypeThree = {
	property3: myEnum;
};

const myEnumFunction = (input: MyTypeThree): MyTypeThree => {
	return input;
};

const myEnumFunctionResult = myEnumFunction({
	property3: myEnum.enumTwo,
});

console.log(myEnumFunctionResult);

// enum is a JS objects so we can map it up using Object keyword
Object.keys(myEnum).map((obj) => console.log(obj));
