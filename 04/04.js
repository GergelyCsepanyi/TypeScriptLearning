"use strict";
class GenericClass {
}
const numberClass = new GenericClass();
numberClass.zeroValue = 0;
numberClass.add = (x, y) => x + y;
console.log(numberClass.add(1, 2));
const stringClass = new GenericClass();
stringClass.zeroValue = "a";
stringClass.add = (x, y) => x + y;
console.log(stringClass.add("b", "c"));
const isString = (x) => {
    return typeof x === "string";
};
console.log("Is testString a string? " + isString("testString"));
console.log("Is 1 a string? " + isString(1));
//type I3 = string | boolean
// Conditional types
