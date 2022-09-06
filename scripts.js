'use strict'

// const Person = function(fullName, birthYear){
//     // instance ptoperties
//   this.fullName = fullName;
//   this.birthYear = birthYear;

// }

// const jonas = new Person('Jonas', 1991);
// console.log(jonas)

// // ==this is how the new kryword works==
// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. ()  linked to a prototype
// // 4. function automatically return{}

// const maltida = new Person('Marilda', 2013);
// const mike = new Person('Mike', 2011);
// console.log(maltida, mike)

// const micheal = 'Great';

// console.log(jonas instanceof(Person));
// console.log(micheal instanceof(Person));

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function(){
//   console.log(2037 - this.birthYear);
// };
// //3.classes are executed in strict mode


// jonas.calcAge();
// mike.calcAge();
// maltida.calcAge();

// console.log(jonas.__proto__)
// console.log(jonas.__proto__ === Person.prototype)

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeLinkedObjects

// Person.prototype.species = 'home sapiens'
// console.log(jonas.species, maltida.species);

// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);;

// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);
// console.log(Person.prototype.array);

// const arr = [3, 3, 9, 4, 9, 4, 5, 0, 5, 2, 5];
// console.log(arr.__proto__ === Array.prototype)

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function(){
//  return [...new Set(this)];
// };

// console.log(arr.unique());
// const h1 = document.querySelector('h1');
// console.dir(x => x + 1)

// // chanllenge#1

// const Car = function (make, speed){
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function() {
//   this.speed += 10;
//   console.log(`${this. make} is going at ${this.speed} km/m`);
// }

// Car.prototype.brake = function() {
//   this.speed -= 5;
//   console.log(`${this. make} is going at ${this.speed} km/m`);
// }
// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercede', 95);

// BMW.accelerate();
// BMW.accelerate();
// BMW.brake();
// Mercedes.accelerate()

// // Es6 classes
// // classs expression
// // const PersonCl = class{}

// class declaration
//   class PersonCl {
  //   constructor(fullName, birthYear){
  //   this.fullName = fullName;
  //   this.birthYear = birthYear;
  //   }

//   // Method will be added to the .prototype property
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   }
//   greet(){
//     console.log(`hey ${this.fullName}`);
//   }
//   get age(){
//     return 2037 - this.birthYear;
//   }
//   set fullName(name){
//     if(name.includes('')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName(){
//     return this._fullName;
//   }
//   static hey(){
//     console.log('Hey guy')
//   }
// }

// const jessica = new PersonCl('jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.__proto__ === PersonCl.prototype);

// console.log(jessica.age);
// // PersonCl.prototype.greet = function (){
// //  console.log(`hey ${this.fullName}`);
// // }

// jessica.greet();
// //1. classes are not hoisted
// //2. classare first class citizen.


// // getters and setters
// //they are useful for data validation.
// const walter = new PersonCl('walter white', 1965);

// const accounts = {
//   owner:'jonas',
//   movement: [200, 530, 120, 900],

//   get lastest(){
//    return this.movement.slice(-1).pop();
//   },
//   // setters takes one value.
//   set lastest(mov){
//     this.movement.push(mov);
//   }
// }
// console.log(accounts.lastest);
// accounts.lastest = 50;
// console.log(accounts.movement)

// // ==Object.create==
// const PersonProto = {
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'mark';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('sarah', 1979);
// sarah.calcAge();



// coding challenge #2

class Car{
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  }
  accelerate(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/hr`);
  }
  brake(){
    this.speed -= 5;
    console.log(`${this.make} is reducing at ${this.speed}km/hr`);
  }
}

const BMW = new Car('Ford', 120);
const Mercede = new Car('Mercede', 120 * 1.6);
const Volvo = new Car('Volvo', 120 / 1.6);



// 1
BMW.accelerate();  
BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.brake();
// ++++++++++++++++++++++
// 2
Mercede.accelerate();
Mercede.accelerate();
// 3
Volvo.accelerate();
Volvo.accelerate();
Volvo.accelerate();
Volvo.brake();
Volvo.brake();

