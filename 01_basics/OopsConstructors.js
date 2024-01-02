const car1 = {
  name: "Santro",
  color: "white",
  tyreSize: 20,
};

class car {
  constructor(n, c, ts) {
    this.name = n;
    this.color = c;
    this.tyreSize = ts;
  }
  print() {
    console.log(this.name);
    console.log(this.color);
    console.log(this.tyreSize);
  }
}

const car2 = new car("BMW", "black", 22);
console.log(car2);
car2.print();
