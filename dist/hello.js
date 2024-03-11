"use strict";
/// <reference path="./Calculator.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Hello, TypeScript!";
console.log(message);
// exercise 1
let temperature = 36.6;
let welcomeMessage = "greeting";
let isLoggedIn = true;
// exercise 2
let colors = ["red", "green", "blue"];
let userInfo = "hamza";
// exercise 3
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
let currentSeason = Season.Spring;
function logValue(value) {
    console.log(value);
}
function noReturn() {
    console.log("No return");
}
// exercise 4
function greet(name) {
    return "Hello " + name;
}
function multiply(a, b) {
    return a * b;
}
function createEmail(to, subject) {
    if (subject)
        return subject;
    else
        return "No subject";
}
function add(x, y, z) {
    if (z)
        return x + y + z;
    return x + y;
}
// exercise 5
function concatenateStrings(...args) {
    return args.join("");
}
function maxNumber(...args) {
    return Math.max(...args);
}
function createVehicle(vehicule) {
    return vehicule;
}
function updatePerson(person, email) {
    let newPerson = {
        name: person.name,
        age: person.age,
        email,
    };
    if (person.email) {
        newPerson.email = person.email;
    }
    return newPerson;
}
function moveCircle(circle, deltaX, deltaY) {
    // circle.centerX += deltaX; // Cannot assign to 'centerX' because it is a read-only property
    // circle.centerY += deltaY; // Cannot assign to 'centerX' because it is a read-only property
    return {
        centerX: circle.centerX + deltaX,
        centerY: circle.centerY + deltaY,
        radius: circle.radius,
    };
}
// exercise 9
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    move(distanceInMeters) {
        console.log("Running..." + distanceInMeters);
    }
}
let dog = new Dog("dog");
dog.move(10);
// exercise 10
class Person {
    constructor(name) {
        this.personName = name;
    }
    getName() {
        return this.personName;
    }
}
let person = new Person("hamza");
// console.log(person.personName); // Property 'name' is private and only accessible within class 'Person'.
console.log(person.getName());
// exercise 11
function identity(arg) {
    return typeof arg;
}
let identityString = identity("myString");
let identityNumber = identity(100);
console.log(identityString);
console.log(identityNumber);
let myIdentity = function (arg) {
    return arg;
};
// exercise 12
var Response_;
(function (Response_) {
    Response_[Response_["No"] = 0] = "No";
    Response_[Response_["Yes"] = 1] = "Yes";
})(Response_ || (Response_ = {}));
function respond(recipient, message) {
    console.log(recipient, message);
}
// exercise 13
var Message;
(function (Message) {
    Message["Success"] = "SUCCESS";
    Message["Failure"] = "FAILURE";
})(Message || (Message = {}));
function respondMessage(recipient, message) {
    console.log(recipient, message);
}
// exercise 14
function padLeft(value, padding) {
    // function body
}
padLeft("Hello world", 4);
padLeft("hello world", "aaa");
let customer = {
    name: "hamza",
    credit: 100,
    email: "hamza@test.com",
    phone: "123456789",
};
function testCustomer(customer) {
    console.log(customer);
}
testCustomer(customer); // { name: 'hamza', credit: 100, email: 'hamza@test.com', phone: '123456789' }
// exercise 16
const stringUtils_1 = require("./stringUtils");
console.log((0, stringUtils_1.capitalize)("hello world")); // Hello world
// exercise 17
const greeter_1 = __importDefault(require("./greeter"));
const greeter_2 = require("./greeter");
console.log((0, greeter_1.default)("hamza")); // Hello, hamza!
console.log((0, greeter_2.greet2)("hamza")); // Hello, hamza!
// exercise 18
// let test = new Calculator.BasicCalculator();
// exercise 19
function logged(constructorFn) {
    console.log("A new instance of " + constructorFn.name + " was created.");
}
let MyClass = class MyClass {
    constructor() {
        console.log("MyClass instance created.");
    }
};
MyClass = __decorate([
    logged,
    __metadata("design:paramtypes", [])
], MyClass);
var myclass = new MyClass(); // A new instance of MyClass was created
// exercise 20
function format(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        return result.toUpperCase();
    };
    return descriptor;
}
class Greeter {
    greet(name) {
        return `Hello, ${name}!`;
    }
}
__decorate([
    format,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], Greeter.prototype, "greet", null);
const greeter = new Greeter();
console.log(greeter.greet("TypeScript")); // Outputs: HELLO, TYPESCRIPT!
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const User = {
    title: "Delete inactive users",
    description: "...",
};
