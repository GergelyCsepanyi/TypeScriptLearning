type FuelType = "petrol" | "diesel" | "electric" | "human_force";
type VehicleType = "car" | "bicycle";
interface VehicleData {
  numberOfWheels: number;
  fuelType: FuelType;
}

interface CarData extends VehicleData {
  numberOfDoors: number;
}

interface BicycleData extends VehicleData {
  hasFrontBrake: boolean;
}

abstract class Vehicle {
  numberOfWheels: number;
  fuelType: FuelType;

  constructor(numberOfWheels: number, fuelType: FuelType) {
    if (numberOfWheels < 1 || numberOfWheels > 50) {
      throw new Error("Wrong number of wheels.");
    }
    this.numberOfWheels = numberOfWheels;
    this.fuelType = fuelType;
  }
  abstract start(): void;
  abstract printParameters(): void;
}

class Car extends Vehicle {
  numberOfDoors: number;

  constructor(
    numberOfWheels: number,
    fuelType: FuelType,
    numberOfDoors: number
  ) {
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
    console.log(
      `Number of wheels: ${this.numberOfWheels}, number of doors: ${this.numberOfDoors}, fuel type: ${this.fuelType}`
    );
  }
}

class Bicycle extends Vehicle {
  hasFrontBrake: boolean;

  constructor(
    numberOfWheels: number,
    fuelType: FuelType,
    hasFrontBrake: boolean
  ) {
    super(numberOfWheels, fuelType);
    this.hasFrontBrake = hasFrontBrake;
  }
  start() {
    console.log(
      "The bicycle has started with sitting on the bicycle's seat and there is no need for a key to start to use it"
    );
  }
  printParameters() {
    console.log(
      `Number of wheels: ${this.numberOfWheels}, is there a front brake: ${
        this.hasFrontBrake ? "yes" : "no"
      }, fuel type: ${this.fuelType}`
    );
  }
}

const createInstance = <T extends Car | Bicycle>(
  constructor: new (...args: any[]) => T,
  ...args: any[]
): T => {
  return new constructor(...args);
};

// function createInstance<T>(constructor: new (...args: any[]) => T, ...args: any[]): T {
//   return new constructor(...args);
// }

const generateVehicle = (
  vehicleType: VehicleType,
  vehicleData: VehicleData
) => {
  let vehicle: Car | Bicycle;

  switch (vehicleType) {
    case "car":
      vehicleData = vehicleData;
      vehicle = createInstance<Car>(
        Car,
        vehicleData.numberOfWheels,
        vehicleData.fuelType,
        (vehicleData as CarData).numberOfDoors
      );
      vehicle.printParameters();
      return vehicle as Car;
    case "bicycle":
      vehicle = createInstance<Bicycle>(
        Bicycle,
        vehicleData.numberOfWheels,
        vehicleData.fuelType,
        (vehicleData as BicycleData).hasFrontBrake
      );
      vehicle.printParameters();
      return vehicle as Bicycle;
    default:
      throw new Error("Invalid vehicle type");
  }
};

const car1 = <Car>generateVehicle("car", {
  numberOfWheels: 50,
  numberOfDoors: 10,
  fuelType: "diesel",
} as CarData);

const bicycle1 = <Bicycle>generateVehicle("bicycle", {
  numberOfWheels: 4,
  fuelType: "human_force",
  hasFrontBrake: false,
} as BicycleData);

car1.start();
bicycle1.start();
