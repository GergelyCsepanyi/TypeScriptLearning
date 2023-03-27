class GenericClass<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

const numberClass = new GenericClass<number>();
numberClass.zeroValue = 0;
numberClass.add = (x, y): number => x + y;

console.log(numberClass.add(1, 2));

const stringClass = new GenericClass<string>();
stringClass.zeroValue = "a";
stringClass.add = (x, y): string => x + y;

console.log(stringClass.add("b", "c"));

type TypeChecker = (x: unknown) => boolean;

const isString = <TypeChecker>(x: unknown): boolean => {
  return typeof x === "string";
};

console.log("Is testString a string? " + isString("testString"));
console.log("Is 1 a string? " + isString(1));

type Person = {
  name: string;
  age: number;
  alive: boolean;
};

// We can access types by indexes
type T1 = Person["age"];

type I1 = Person["age" | "name"];

//type I1 = string | number

type I2 = Person[keyof Person];

//type I2 = string | number | boolean

type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];

//type I3 = string | boolean

// Conditional types
