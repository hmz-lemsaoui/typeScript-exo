"use strict";
/// <reference path="./Calculator.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello, TypeScript!";
console.log(message);
// exercise 1
var temperature = 36.6;
var welcomeMessage = "greeting";
var isLoggedIn = true;
// exercise 2
var colors = ["red", "green", "blue"];
var userInfo = "hamza";
// exercise 3
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
var currentSeason = Season.Spring;
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
function concatenateStrings() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.join("");
}
function maxNumber() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Math.max.apply(Math, args);
}
function createVehicle(vehicule) {
    return vehicule;
}
function updatePerson(person, email) {
    var newPerson = {
        name: person.name,
        age: person.age,
        email: email,
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
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.move = function (distanceInMeters) {
        console.log("Running..." + distanceInMeters);
    };
    return Dog;
}(Animal));
var dog = new Dog("dog");
dog.move(10);
// exercise 10
var Person = /** @class */ (function () {
    function Person(name) {
        this.personName = name;
    }
    Person.prototype.getName = function () {
        return this.personName;
    };
    return Person;
}());
var person = new Person("hamza");
// console.log(person.personName); // Property 'name' is private and only accessible within class 'Person'.
console.log(person.getName());
// exercise 11
function identity(arg) {
    return typeof arg;
}
var identityString = identity("myString");
var identityNumber = identity(100);
console.log(identityString);
console.log(identityNumber);
var myIdentity = function (arg) {
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
var customer = {
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
var stringUtils_1 = require("./stringUtils");
console.log((0, stringUtils_1.capitalize)("hello world")); // Hello world
// exercise 17
var greeter_1 = require("./greeter");
var greeter_2 = require("./greeter");
console.log((0, greeter_1.default)("hamza")); // Hello, hamza!
console.log((0, greeter_2.greet2)("hamza")); // Hello, hamza!
// exercise 18
// let test = new Calculator.BasicCalculator();
// exercise 19
function logged(constructorFn) {
    console.log("A new instance of " + constructorFn.name + " was created.");
}
var MyClass = function () {
    var _classDecorators = [logged];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var MyClass = _classThis = /** @class */ (function () {
        function MyClass_1() {
            console.log("MyClass instance created.");
        }
        return MyClass_1;
    }());
    __setFunctionName(_classThis, "MyClass");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MyClass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyClass = _classThis;
}();
var myclass = new MyClass(); // A new instance of MyClass was created
// exercise 20
function format(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalMethod.apply(this, args);
        return result.toUpperCase();
    };
    return descriptor;
}
var Greeter = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _greet_decorators;
    return _a = /** @class */ (function () {
            function Greeter() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            Greeter.prototype.greet = function (name) {
                return "Hello, ".concat(name, "!");
            };
            return Greeter;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _greet_decorators = [format];
            __esDecorate(_a, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: function (obj) { return "greet" in obj; }, get: function (obj) { return obj.greet; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var greeter = new Greeter();
console.log(greeter.greet("TypeScript")); // Outputs: HELLO, TYPESCRIPT!
