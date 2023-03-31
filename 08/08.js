"use strict";
// This can comes from a different location
const AnimalDefaultValues = {
    type: "Animal Type",
    age: 0,
};
class Animal {
    // It's like a function (parameter) overloading
    constructor(obj) {
        var _a, _b;
        this.type = (_a = obj === null || obj === void 0 ? void 0 : obj.type) !== null && _a !== void 0 ? _a : AnimalDefaultValues.type;
        this.age = (_b = obj === null || obj === void 0 ? void 0 : obj.age) !== null && _b !== void 0 ? _b : AnimalDefaultValues.age;
    }
    //abstract eat(): void
    static sleep() {
        console.log("The animal is sleeping...");
    }
    getTypeAndAge() {
        console.log("Type:", this.type);
        console.log("Age:", this.age);
    }
}
Animal.sleep();
const a1 = new Animal();
a1.getTypeAndAge();
const a2 = new Animal({ age: 1 });
a2.getTypeAndAge();
const a3 = new Animal({ type: "Dog" });
a3.getTypeAndAge();
