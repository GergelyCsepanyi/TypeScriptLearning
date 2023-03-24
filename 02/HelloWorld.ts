const sayHello = (name: string): void => {
  console.log(`Hello ${name}!`);
};

sayHello("Test");

const greet = (name: string, age: number): void => {
  console.log(`Hello ${name}, ${age}`);
};

greet("Bob", 30);
