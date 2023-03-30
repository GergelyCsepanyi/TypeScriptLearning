type Person = {
  name: string;
  age: number;
  type: "user" | "admin";
};

// Add readonly modifier to all field
type LockedPerson = { readonly [Property in keyof Person]: any };

// Remove readonly modifier (it is the same like the Person type)
type UnlockPerson = { -readonly [Property in keyof Person]: any };

// Remove the 'age' property and add the 'age?' one
type PersonOptionalAge = Omit<Person, "age"> & { age?: number };

const personOptionalAge: PersonOptionalAge = {
  name: "Bob",
  type: "admin",
  // The age is optional now
};
