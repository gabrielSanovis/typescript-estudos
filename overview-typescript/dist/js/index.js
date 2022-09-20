"use strict";
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
