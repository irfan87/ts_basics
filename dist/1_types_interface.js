var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// return the input
function myReturnFunction(input) {
    return input;
}
// if not return the input
function myFunction(input) {
    input;
}
// async function
function myAsyncFuntion(input) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, input];
        });
    });
}
var myReturnFunctionResult = myReturnFunction({
    property1: "this is a test 1 from myReturnFunction",
    property2: "this is a test 2 from myReturnFunction",
    property3: "this is a test 3 from myReturnFunction"
});
var myFunctionResult = myFunction({
    property1: "test 1 from myFunction",
    property2: "test 2 from myFunction",
    property3: "test 3 from myFunction"
});
var myAsyncFuntionResult = myAsyncFuntion({
    property1: "test 1 from myAsyncFunction",
    property2: "test 2 from myAsyncFunction",
    property3: "test 3 from myAsyncFunction"
});
// execute the function that have the extended of MyInterface2
var testRunFunction = function (input) {
    input;
};
var testRunReturnFunction = function (input) {
    return input;
};
var testRunAsyncFunction = function (input) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, input];
    });
}); };
var testRunFunctionResult = testRunFunction({
    property1: "first test from testRunFunction",
    property2: "second test from testRunFunction",
    property3: "third test from testRunFunction",
    property4: "forth test from testRunFunction"
});
var testRunReturnFunctionResult = testRunReturnFunction({
    property1: "first test from testRunReturnFunction",
    property2: "second test from testRunReturnFunction",
    property3: "third test from testRunReturnFunction",
    property4: "forth test from testRunReturnFunction"
});
var testRunAsyncFunctionResult = testRunAsyncFunction({
    property1: "first test from testRunAsyncFunction",
    property2: "second test from testRunAsyncFunction",
    property3: "third test from testRunAsyncFunction",
    property4: "forth test from testRunAsyncFunction"
});
console.log(myReturnFunctionResult);
console.log(myFunctionResult);
console.log(myAsyncFuntionResult);
console.log(testRunFunctionResult);
console.log(testRunReturnFunctionResult);
console.log(testRunAsyncFunctionResult);
var myAsyncFunctionType = function (input) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, input];
    });
}); };
var myFunctionType = function (input) {
    input;
};
var myAsyncFunctionTypeResult = myAsyncFunctionType({
    property1: "test from MyType"
});
var myFunctionTypeResult = myFunctionType({
    property1: "test from MyTypeTwo that inherite from MyType",
    property2: 15
});
console.log(myAsyncFunctionTypeResult);
console.log(myFunctionTypeResult);
// enums
var myEnum;
(function (myEnum) {
    myEnum["enumOne"] = "enumOne";
    myEnum["enumTwo"] = "enumTwo";
    myEnum["enumThree"] = "enumThree";
})(myEnum || (myEnum = {}));
var myEnumFunction = function (input) {
    return input;
};
var myEnumFunctionResult = myEnumFunction({
    property3: myEnum.enumTwo
});
console.log(myEnumFunctionResult);
// enum is a JS objects so we can map it up using Object keyword
Object.keys(myEnum).map(function (obj) { return console.log(obj); });
