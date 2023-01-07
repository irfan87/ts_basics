interface RandomInterface {
	property1: string;
	property2?: string;
	property3: string;
}

const obj: Partial<RandomInterface> = {
	property1: "test",
	property2: "test 2",
};

console.log(obj);

const obj2: Omit<RandomInterface, "property3" | "property1" | "property2"> = {
	proptery1: "huhu",
};

console.log(obj2);
