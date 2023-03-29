interface Person {
  name: string;
  age: number;
  address: string;
}

type PersonKeys = keyof Person;

const person: Person = {
  name: "Bob",
  age: 30,
  address: "city street 1",
};

const nameKey: PersonKeys = "name";
