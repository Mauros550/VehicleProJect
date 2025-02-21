// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  constructor(vin: string,color: string,make: string,model: string,year: number,weight: number,topSpeed: number,wheels: Wheel[] = []) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    if(wheels.length !== 2 ) {
      this.wheels = [new Wheel(), new Wheel()];
    }else {
      this.wheels = wheels;
    }
  }

  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie !`);
  
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Motorbike details: VIN: ${this.vin}, ${this.make} ${this.model}, ${this.year}, ${this.color}, ${this.weight}kg, Top Speed: ${this.topSpeed}mph, Wheels: ${this.wheels.length}`);
  }
}
  
export default Motorbike;
