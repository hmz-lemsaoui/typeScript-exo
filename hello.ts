/// <reference path="./Calculator.ts" />

let message: string = "Hello, TypeScript!";
console.log(message);

// exercise 1

let temperature: number = 36.6;

let welcomeMessage: string = "greeting";

let isLoggedIn: boolean = true;

// exercise 2

let colors: string[] = ["red", "green", "blue"];

let userInfo: string = "hamza";

// exercise 3

enum Season {
  Spring,
  Summer,
  Autumn,
  Winter,
}

let currentSeason: Season = Season.Spring;

function logValue(value: any) {
  console.log(value);
}

function noReturn(): void {
  console.log("No return");
}

// exercise 4

function greet(name: string): string {
  return "Hello " + name;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function createEmail(to: string, subject?: string) {
  if (subject) return subject;
  else return "No subject";
}

function add(x: number, y: number, z?: number): number {
  if (z) return x + y + z;

  return x + y;
}

// exercise 5

function concatenateStrings(...args: string[]): string {
  return args.join("");
}

function maxNumber(...args: number[]): number {
  return Math.max(...args);
}

// exercise 6

interface Vehicle {
  make: string;
  model: string;
  year: Date;
}

function createVehicle(vehicule: Vehicle): Vehicle {
  return vehicule;
}

// exercise 7

interface Person {
  name: string;
  age: number;
  email?: string;
}

function updatePerson(
  person: Person,
  email: string
): {
  name: string;
  age: number;
  email: string;
} {
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

// exercise 8

interface Circle {
  readonly centerX: number;
  readonly centerY: number;
  readonly radius: number;
}

function moveCircle(circle: Circle, deltaX: number, deltaY: number): Circle {
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
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  move(distanceInMeters: number): void {
    console.log("Running..." + distanceInMeters);
  }
}

let dog = new Dog("dog");

dog.move(10);

// exercise 10

class Person {
  private personName: string;
  constructor(name: string) {
    this.personName = name;
  }

  getName(): string {
    return this.personName;
  }
}

let person = new Person("hamza");

// console.log(person.personName); // Property 'name' is private and only accessible within class 'Person'.

console.log(person.getName());

// exercise 11

function identity<T>(arg: T) {
  return typeof arg;
}

let identityString = identity<string>("myString");
let identityNumber = identity<number>(100);

console.log(identityString);
console.log(identityNumber);

// exercise

interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = function (arg: number): number {
  return arg;
};

interface GenericArray<T> {
  (arg: T[]): T[];
}

// exercise 12

enum Response_ {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: Response_): void {
  console.log(recipient, message);
}

// exercise 13

enum Message {
  Success = "SUCCESS",
  Failure = "FAILURE",
}

function respondMessage(recipient: string, message: Message): void {
  console.log(recipient, message);
}

// exercise 14
function padLeft(value: string, padding: string | number) {
  // function body
}

padLeft("Hello world", 4);

padLeft("hello world", "aaa");

// exercise 15

interface BusinessPartner {
  name: string;
  credit: number;
}

interface Contact {
  email: string;
  phone: string;
}

type Customer = BusinessPartner & Contact;

let customer: Customer = {
  name: "hamza",
  credit: 100,
  email: "hamza@test.com",
  phone: "123456789",
};

function testCustomer(customer: BusinessPartner & Contact) {
  console.log(customer);
}

testCustomer(customer); // { name: 'hamza', credit: 100, email: 'hamza@test.com', phone: '123456789' }

// exercise 16
import { capitalize } from "./stringUtils";

console.log(capitalize("hello world")); // Hello world

// exercise 17

import greet1 from "./greeter";
import { greet2 } from "./greeter";

console.log(greet1("hamza")); // Hello, hamza!
console.log(greet2("hamza")); // Hello, hamza!

// exercise 18

// let test = new Calculator.BasicCalculator();

// exercise 19
function logged(constructorFn: Function) {
  console.log("A new instance of " + constructorFn.name + " was created.");
}

@logged
class MyClass {
  constructor() {
    console.log("MyClass instance created.");
  }
}

var myclass = new MyClass(); // A new instance of MyClass was created

// exercise 20
function format(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const result = originalMethod.apply(this, args);
    return result.toUpperCase();
  };

  return descriptor;
}

class Greeter {
  @format
  greet(name: string): string {
    return `Hello, ${name}!`;
  }
}

const greeter = new Greeter();
console.log(greeter.greet("TypeScript")); // Outputs: HELLO, TYPESCRIPT!

// exercise 21

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return { ...todo, ...fieldsToUpdate };
}

const User: Readonly<Todo> = {
  title: "Delete inactive users",
  description: "...",
};
