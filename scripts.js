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

// class Car{
//   constructor(make, speed){
//     this.make = make;
//     this.speed = speed;
//   }
//   // Increase the speed of the car by 10.
//   accelerate(){
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/hr`);
//   }
//   // Reduce the speed of the car by -5
//   brake(){
//     this.speed -= 5;
//     console.log(`${this.make} is reducing at ${this.speed}km/hr`);
//   }
//   // this dive the speed.
//   get speedUs(){
//      return this.speed / 1.6;
//   }
//    set speedUs(speed){
//     this.speed = speed * 1.6;
//    }
// }
// const ford = new Car('Ford', 120);


// // 1 The function increase the speed of the car.
// ford.accelerate();  
// ford.accelerate();
// ford.accelerate();

// // This reduce the speed of the car 
// ford.brake();
// ford.brake();

// // get speedUS
// console.log(ford.speedUs)

// // set speedUs
// ford.speedUs = 50;
// console.log(ford);

// Inheritance btw "classes" : Constructor functions

// const Person = function(fullName, birthYear){
//   this.fullName = fullName;
//   this.birthYear = birthYear;
// }
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // +++++++++++++================================================

const Student = function (firstName,birthYear,course){
  // Persin.call is use for adding this keyword.
  Person.call(this, firstName, birthYear);
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  this.course = course;
}

// Linking prototype
Student.prototype = Object.create(Person.prototype);


Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
}
const mike = new Student('Mike', 2020, 'computer science');
console.log(mike)

console.log(mike instanceof Student);
console.log(mike instanceof Person)
mike.introduce();
mike.calcAge();
console.log(mike.__proto__)
Student.prototype.constructor = Student;

//  coding challenge#3
const Car = function (make, speed){
    this.make = make;
    this.speed = speed;
  };
  
  Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this. make} is going at ${this.speed} km/m`);
  }
  
  Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this. make} is going at ${this.speed} km/m`);
  };

  // The "EV" is the child class of the "Car" parent.
  const Ev = function (make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
  }

  // Linking the prototype (the prototype of Ev inherit the prototype of the Car)
  Ev.prototype = Object.create(Car.prototype);

  Ev.prototype.chargeBattery = function(chargeTo){
    this.chargeTo = chargeTo;
  };
  
  Ev.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} Km/h, with a charge of ${this.charge}`)
  }
 
  const tesla = new Ev('Tesla', 120, 20);
  tesla.chargeBattery(90);
  console.log(tesla);

  tesla.brake()
  tesla.accelerate();

// =================================================================
// ===== Inheritance btw "classes" Es6 classes ========================
class PersonCl {
    constructor(fullName, birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
    }

  // Method will be added to the .prototype property
  calcAge(){
    console.log(2037 - this.birthYear);
  }
  greet(){
    console.log(`hey ${this.fullName}`);
  }
  get age(){
    return 2037 - this.birthYear;
  }
  set fullName(name){
    if(name.includes('')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName(){
    return this._fullName;
  }
  static hey(){
    console.log('Hey guy')
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course){
    // Always need to happen first! (because the super is resposible for calling this keyword)
    super(fullName, birthYear, course);
    this.course = course;
  }
  introduce(){
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }
  calcAge(){
     console.log(`i'm ${2037 - this.birthYear} years old but as a student i feel more like ${2037 - this.birthYear + 10}`)
  }
}

const martha = new StudentCl ('Martha', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
martha.greet()

// ======================================================================
// inheritance between "classes" : Object.create

const PersonProto = {
  calcAge(){
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);


StudentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName} and i studied ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer science');
jay.introduce();
jay.calcAge();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Examples of classes
class Account {
  //1.) public fields (instances)
  locale = navigator.language;
  
  //2) Private fields (instances)
  #movement = [];
  #pin;
  

  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    // this._movement = [];
    // this.locale = navigator.language;

    console.log(`thanks for opening an account, ${owner}`);
  }
  getMovement() {
    return this.#movement;
  }
  // 3)Method public
  // Public interface
  deposit(val){
    this.#movement.push(val);
    return this;
  }
  withdraw(val){
    this.deposit(-val);
    return this;
  }
  requestLoan(val){
    if(this.approveLoan()){
      this.deposit(val);
      console.log(`loan approved`);
      return this;
    }
  }
    static helper(){
      console.log('Helper')
    }
  //4) private methods
  approveLoan(val) {
    return true;
  }
}



const acct1 = new Account('jonas', 'EUR', 1111);
acct1.deposit(240);
acct1.withdraw(-140);
acct1.requestLoan(1000);

console.log(acct1.pin)
console.log(acct1);

Account.helper();
// console.log(acct1.#approveLoan(1000))

// chaining
acct1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acct1.getMovement());

// ===Coding challenge=======================================================
// Using Es6 classes to attempt the same question

class CarCl{
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  }
  // Increase the speed of the car by 10.
  accelerate(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/hr`);
  }
  // Reduce the speed of the car by -5
  brake(){
    this.speed -= 5;
    console.log(`${this.make} is reducing at ${this.speed}km/hr`);
    return this;
  }
  // this diving the speed by 1.6
  get speedUs(){
     return this.speed / 1.6;
  }
  // mutiplying the speed by 1.6
   set speedUs(speed){
    this.speed = speed * 1.6;
   }
 }

 class EvCl extends CarCl{
  // making the charge private.
  #charge;

 constructor(make, speed, charge){
   super(make, speed);
    this.#charge = charge;
  }
  
  chargeBattery(chargeTo){
        this.#charge = chargeTo;
        // return this helps us for chaining the methods at line 517 - 521
        return this;
      };

  accelerate(){
  this.speed += 10;
  this.#charge--;
  console.log(`${this.make} is going at ${this.speed}km/hr, at the charge of ${this.#charge}`);
  // Also helps for for multiple cahining.
  return this;
}
}

const rivian = new EvCl('Rivian', 120, 23)
console.log(rivian);
rivian.accelerate()
.accelerate()
.accelerate()
.brake()
.chargeBattery(50).accelerate();

console.log(rivian.speedUs);






 

