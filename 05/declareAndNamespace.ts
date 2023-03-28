namespace myNameSpace {
  // This function is declared with the 'declare' keyword, which means that it is an ambient declaration that does not include an implementation. This allows other parts of the code to provide an implementation for the function later.
  export declare function add<T extends number | string>(x: T, y: T): T;
  export declare function add(x: boolean, y: boolean): boolean;

  // Because it is not exported, it will be unreachable from outside the namespace
  declare let counter: number;

  // We can initialise variables (because we don't use the 'declare' keyword)
  let x = 1;
}

declare namespace strictNameSpace {
  function subtract<T extends number | boolean>(x: T, y: T): T;
  let counter: number;

  // Because we used the 'declare' keyword for the namespace, we can't initialise
  //let x = 1; // won't work
}

// Create an implementation that matches with the declaration
myNameSpace.add = <T>(x: T, y: T) => (x as any) + (y as any);

console.log(myNameSpace.add<number>(1, 2));
console.log(myNameSpace.add<string>("a", "b"));
console.log(myNameSpace.add<string>(true as unknown as string, "B"));
console.log(myNameSpace.add(false, true)); // false is 0, true is 1 => result will be 1

// Unreachable
//console.log(myNameSpace.counter);

namespace strictNameSpace {
  counter = 11;
  //subtract = <T>(x: T, y: T) => (x as any) + (y as any);
}

console.log(strictNameSpace.counter);
