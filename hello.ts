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

function updatePerson(person: Person): {
  name: string;
  age: number;
  email: string;
} {
  let newPerson = {
    name: person.name,
    age: person.age,
    email: "test@test.com",
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
