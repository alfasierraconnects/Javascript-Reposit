'use strict';
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is travelling at speed of ${this.speed}kmph.`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is travelling at speed of ${this.speed}kmph.`);
  }
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();
car1.brake();

class parent {
  display() {
    console.log('parent is invoked');
  }
}

class child extends parent {
  display() {
    console.log('child is invoked');
  }
}

var a = new parent();
var b = new child();

a.display();
b.display();
