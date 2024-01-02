class Person {
  constructor(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
}

Person.prototype.nationality = "English";

const Ashu = new Person("Ashutosh", "Sahoo", 25, "black");

console.log(Ashu.nationality);

console.log(Ashu);
console.log(Ashu.__proto__);
console.log(Person.prototype.isPrototypeOf(Person));
console.log(Person.prototype.isPrototypeOf(Ashu));
console.log(Ashu.__proto__ === Person.prototype);
console.log(Ashu.hasOwnProperty("nationality"));
console.log(Ashu.hasOwnProperty("age"));
