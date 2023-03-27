"use strict";
class Vehicle {
    constructor(numberOfWheels, fuelType) {
        if (numberOfWheels < 1 || numberOfWheels > 50) {
            throw new Error("Wrong number of wheels.");
        }
        this.numberOfWheels = numberOfWheels;
        this.fuelType = fuelType;
    }
}
class Car extends Vehicle {
    constructor(numberOfWheels, fuelType, numberOfDoors) {
        if (numberOfDoors < 1 || numberOfDoors > 10) {
            throw new Error("Wrong number of doors.");
        }
        super(numberOfWheels, fuelType);
        this.numberOfDoors = numberOfDoors;
    }
    start() {
        console.log("The car's engine has started with turning the key over");
    }
    printParameters() {
        console.log(`Number of wheels: ${this.numberOfWheels}, number of doors: ${this.numberOfDoors}, fuel type: ${this.fuelType}`);
    }
}
class Bicycle extends Vehicle {
    constructor(numberOfWheels, fuelType, hasFrontBrake) {
        super(numberOfWheels, fuelType);
        this.hasFrontBrake = hasFrontBrake;
    }
    start() {
        console.log("The bicycle has started with sitting on the bicycle's seat and there is no need for a key to start to use it");
    }
    printParameters() {
        console.log(`Number of wheels: ${this.numberOfWheels}, is there a front brake: ${this.hasFrontBrake ? "yes" : "no"}, fuel type: ${this.fuelType}`);
    }
}
const createInstance = (constructor, ...args) => {
    return new constructor(...args);
};
// function createInstance<T>(constructor: new (...args: any[]) => T, ...args: any[]): T {
//   return new constructor(...args);
// }
const generateVehicle = (vehicleType, vehicleData) => {
    let vehicle;
    switch (vehicleType) {
        case "car":
            vehicleData = vehicleData;
            vehicle = createInstance(Car, vehicleData.numberOfWheels, vehicleData.fuelType, vehicleData.numberOfDoors);
            vehicle.printParameters();
            return vehicle;
        case "bicycle":
            vehicle = createInstance(Bicycle, vehicleData.numberOfWheels, vehicleData.fuelType, vehicleData.hasFrontBrake);
            vehicle.printParameters();
            return vehicle;
        default:
            throw new Error("Invalid vehicle type");
    }
};
const car1 = generateVehicle("car", {
    numberOfWheels: 50,
    numberOfDoors: 10,
    fuelType: "diesel",
});
const bicycle1 = generateVehicle("bicycle", {
    numberOfWheels: 4,
    fuelType: "human_force",
    hasFrontBrake: false,
});
car1.start();
bicycle1.start();
