"use strict";
// Primitive types
let number = 2;
let string = "test string";
let bool = true;
let numberWithoutAnnotation = 21;
let stringWithoutAnnotation = "test";
let boolWithoutAnnotation = false;
let value = Number("string");
number = isNaN(value) ? 2 : value;
console.log(number);
let arrayOfNumbers = [1, 2, 3];
console.log(arrayOfNumbers);
// Union
const printNumber = (number) => {
    console.log(number);
};
printNumber(12);
printNumber("22");
//printNumber(true);
// Narrowing
const printString = (string) => {
    //console.log(string.toLowerCase());
    console.log(typeof string === "string" ? string.toLowerCase() : string);
};
printString("TEST");
printString("2");
const printPerson = (person) => {
    console.log(`Name: ${person.name}, Date of birth: ${person.dateOfBirth}, Is married: ${person.isMarried}`);
};
printPerson({ isMarried: false, name: "Bob", dateOfBirth: "1978.11.21." });
function configure(option) {
    console.log("Configure option...");
}
configure({ width: 10 });
configure("auto");
const printBoolean = (boolParam) => {
    console.log(boolParam);
};
printBoolean("true");
const printIdNamePair = (idNamePair) => {
    console.log(`ID: ${idNamePair[0]}, Name: ${idNamePair[1]} `);
    //console.log(idNamePair[2]); // Wrong index
};
printIdNamePair([1, "Bob"]);
// Literal Types
let changableString = "Some text"; // primitive type
const constantString = "Hello World!"; // literal type
let x = "test";
//x = "test2"; // Wrong, not assignable
const printText = (text, position) => {
    console.log(`Text: ${text}, Position: ${position}`);
};
printText("Hello World!", "center");
// Non-null Assertion Operator (!)
// Just like other type assertions, this doesn’t change the runtime behavior of your code, so it’s important to only use ! when you know that the value can’t be null or undefined.
const optionalTextUppercase = (text) => {
    console.log(text.toUpperCase());
};
optionalTextUppercase("text to uppercase");
//optionalTextUppercase(null); // throws an error
// Enums
var SuccessfulUserResponse;
(function (SuccessfulUserResponse) {
    SuccessfulUserResponse[SuccessfulUserResponse["No"] = 0] = "No";
    SuccessfulUserResponse[SuccessfulUserResponse["Yes"] = 1] = "Yes";
})(SuccessfulUserResponse || (SuccessfulUserResponse = {}));
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 1] = "No";
    UserResponse[UserResponse["Yes"] = 2] = "Yes";
})(UserResponse || (UserResponse = {}));
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// Generics
const identity = (arg) => {
    return arg;
};
let data = "Hello World!"; // if it would be a const, then the type would be literal type
console.log(identity(data));
const printLength = (arg) => {
    console.log("The given argument's length is:", arg.length);
    return arg;
};
console.log(printLength([1, 2, 3]));
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
// Generic Classes
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(1, 2));
// Generic class with multiple type
class GenericWithMultipleType {
}
// Create an instance
const myGenericWithMultipleType = new GenericWithMultipleType();
myGenericWithMultipleType.id = 1;
myGenericWithMultipleType.name = "Bob";
myGenericWithMultipleType.print = (id, name) => {
    console.log(`ID: ${id}, Name: ${name}`);
};
// Call the function
myGenericWithMultipleType.print(myGenericWithMultipleType.id, myGenericWithMultipleType.name);
function create(c) {
    return new c();
}
//const test = create<number>();
