// This can comes from a different file
interface AnimalType {
  type?: string;
  age?: number; // Storing the dateofBirth is better
}

// This can comes from a different location
const AnimalDefaultValues = {
  type: "Animal Type",
  age: 0,
};

class Animal {
  private type: string;
  private age: number;

  // It's like a function (parameter) overloading
  constructor(obj?: AnimalType) {
    this.type = obj?.type ?? AnimalDefaultValues.type;
    this.age = obj?.age ?? AnimalDefaultValues.age;
  }

  //abstract eat(): void

  static sleep(): void {
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
