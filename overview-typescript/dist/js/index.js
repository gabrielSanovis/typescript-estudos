"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
console.log(x);
let inferencia = 20;
let annotation = 10;
let firstName = "Gabriel";
let age = 19;
let isAdmin = true;
firstName = "Cauã";
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "name", ["a", "b", "c"]];
const user = {
    name: "Gabriel",
    age: 19
};
console.log(user);
let typeAny = 0;
console.log(typeAny);
typeAny = "teste";
console.log(typeAny);
typeAny = true;
console.log(typeAny);
typeAny = [];
console.log(typeAny);
let id = "10";
id = 20;
const userId = 10;
const productId = "20";
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M
};
console.log(camisa);
let literalTypes;
literalTypes = "valorUnico";
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 54));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Gabriel"));
function logger(msg) {
    console.log(msg);
}
logger("Mensagem de error");
function greeting(name, greet) {
    console.log(`Olá ${greet || "Sir"} ${name}`);
}
greeting("Gabriel");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 10, n2: 31 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 4, n2: 5 }));
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
function doSomething(info) {
    typeof info === "number"
        ? console.log(`O número é ${info}`)
        : console.log("Não é um número");
}
doSomething(true);
doSomething(10);
function showArraysItems(arr) {
    arr.forEach(item => {
        console.log(`Item: ${item}`);
    });
}
showArraysItems([0, 2, 3, 4, 5]);
showArraysItems(["a", "b", "c", "d", "e"]);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O usuário é o ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const Gab = new User("Gabriel", "Admin", true);
console.log(Gab);
Gab.showUserName();
Gab.showUserRole();
Gab.showUserRole(Gab.isApproved);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`O carro é da marca ${this.brand}`);
    }
}
const X1 = new Car("BMW", 4);
X1.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParams() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParams()
], Person);
const sam = new Person("Sam");
console.log(sam);
