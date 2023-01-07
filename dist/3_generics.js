// generics
function myFunctionTest(input) {
    return input;
}
var result = myFunctionTest({
    name: "james"
});
var result2 = myFunctionTest({ isWorking: false });
var result3 = myFunctionTest({
    name: "dope"
});
var result4 = myFunctionTest({
    name: "dangggg",
    isWorking: true
});
console.log(result);
console.log(result2);
