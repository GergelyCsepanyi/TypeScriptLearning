"use strict";
var myNameSpace;
(function (myNameSpace) {
    // We can initialise variables (because we don't use the 'declare' keyword)
    let x = 1;
})(myNameSpace || (myNameSpace = {}));
// Create an implementation that matches with the declaration
myNameSpace.add = (x, y) => x + y;
console.log(myNameSpace.add(1, 2));
console.log(myNameSpace.add("a", "b"));
console.log(myNameSpace.add(true, "B"));
console.log(myNameSpace.add(false, true)); // false is 0, true is 1 => result will be 1
// Unreachable
//console.log(myNameSpace.counter);
var strictNameSpace;
(function (strictNameSpace) {
    strictNameSpace.counter = 11;
    //subtract = <T>(x: T, y: T) => (x as any) + (y as any);
})(strictNameSpace || (strictNameSpace = {}));
console.log(strictNameSpace);
console.log(strictNameSpace.counter);
