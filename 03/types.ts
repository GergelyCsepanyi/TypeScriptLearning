// Primitive types
let number: number = 2;
let string: string = "test string";
let bool: boolean = true;

let numberWithoutAnnotation = 21;
let stringWithoutAnnotation = "test";
let boolWithoutAnnotation = false;

let value = Number("string");

number = isNaN(value) ? 2 : value;
console.log(number);

let arrayOfNumbers: number[] = [1, 2, 3];
console.log(arrayOfNumbers);

// Union
const printNumber = (number: number | string): void => {
  console.log(number);
};

printNumber(12);
printNumber("22");
//printNumber(true);

// Narrowing
const printString = (string: string | number): void => {
  //console.log(string.toLowerCase());
  console.log(typeof string === "string" ? string.toLowerCase() : string);
};
printString("TEST");
printString("2");

// Type Aliases
type Person = {
  name: string;
  dateOfBirth: string;
  isMarried: boolean;
};
type ID = string | number;

const printPerson = (person: Person): void => {
  console.log(
    `Name: ${person.name}, Date of birth: ${person.dateOfBirth}, Is married: ${person.isMarried}`
  );
};

printPerson({ isMarried: false, name: "Bob", dateOfBirth: "1978.11.21." });

// Interfaces
interface PersonInterface {
  name: string;
  dateOfBirth: string;
  isMarried: boolean;
}

interface Options {
  width: number;
}
function configure(option: Options | "auto") {
  console.log("Configure option...");
}
configure({ width: 10 });
configure("auto");
//configure("automatic");

// There’s one more kind of literal type: boolean literals. There are only two boolean literal types, and as you might guess, they are the types true and false
// The type boolean itself is actually just an alias for the union true | false.
type Boolean2 = "false" | "true";
const printBoolean = (boolParam: Boolean2) => {
  console.log(boolParam);
};
printBoolean("true");

// Differences Between Type Aliases and Interfaces
// Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

// Tuple
// A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
type IdNamePair = [number, string];
const printIdNamePair = (idNamePair: IdNamePair) => {
  console.log(`ID: ${idNamePair[0]}, Name: ${idNamePair[1]} `);

  //console.log(idNamePair[2]); // Wrong index
};
printIdNamePair([1, "Bob"]);

// Literal Types
let changableString = "Some text"; // primitive type
const constantString = "Hello World!"; // literal type

let x: "test" = "test";
//x = "test2"; // Wrong, not assignable

const printText = (
  text: string,
  position: "left" | "center" | "right"
): void => {
  console.log(`Text: ${text}, Position: ${position}`);
};

printText("Hello World!", "center");

// Non-null Assertion Operator (!)
// Just like other type assertions, this doesn’t change the runtime behavior of your code, so it’s important to only use ! when you know that the value can’t be null or undefined.
const optionalTextUppercase = (text: string | null): void => {
  console.log(text!.toUpperCase());
};
optionalTextUppercase("text to uppercase");
//optionalTextUppercase(null); // throws an error

// Enums
enum SuccessfulUserResponse {
  No,
  Yes,
}

enum UserResponse {
  No = 1,
  Yes,
}

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Generics
const identity = <Type>(arg: Type): Type => {
  return arg;
};
let data = "Hello World!"; // if it would be a const, then the type would be literal type
console.log(identity(data));

const printLength = <Type>(arg: Type[]): Type[] => {
  console.log("The given argument's length is:", arg.length);
  return arg;
};

console.log(printLength([1, 2, 3]));

interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

// Generic Classes
class GenericNumber<NumberType> {
  zeroValue: NumberType;
  add: (x: NumberType, y: NumberType) => NumberType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
console.log(myGenericNumber.add(1, 2));

// Generic class with multiple type
class GenericWithMultipleType<T1, T2> {
  id: T1;
  name: T2;
  print: (id: T1, name: T2) => void;
}

// Create an instance
const myGenericWithMultipleType = new GenericWithMultipleType<number, string>();
myGenericWithMultipleType.id = 1;
myGenericWithMultipleType.name = "Bob";
myGenericWithMultipleType.print = (id, name) => {
  console.log(`ID: ${id}, Name: ${name}`);
};

// Call the function
myGenericWithMultipleType.print(
  myGenericWithMultipleType.id,
  myGenericWithMultipleType.name
);

/**
 * Represents a Person with a name and an age.
 */
class Person2 {
  name: string;
  age: number;

  /**
   * Creates a new instance of a Person2.
   * @param name The name of the person.
   * @param age The age of the person.
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   * Prints a greeting message for the person.
   */
  greet() {
    console.log(`Hello ${this.name} at age ${this.age}`);
  }
}

/**
 * Creates a new instance of a class with the given name and age parameters.
 * @param c The constructor of the class to create an instance of.
 * @param name The name parameter for the class constructor.
 * @param age The age parameter for the class constructor.
 * @returns A new instance of the class.
 */
function create<Type>(
  c: new (name: string, age: number) => Type,
  name: string,
  age: number
): Type {
  return new c(name, age);
}

// Create a new instance of a Person2 with the name "Alice" and age 22.
const person2: Person2 = create<Person2>(Person2, "ALice", 22);

// Output the created person2 object.
console.log(person2);

function createAbstract<Type>(
  constructor: new (...args: any[]) => Type,
  ...args: any[]
): Type {
  return new constructor(...args);
}

const abstract1: Person2 = createAbstract<Person2>(Person2, "Bob", 111);
console.log(abstract1.greet());
