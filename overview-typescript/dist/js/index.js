"use strict";
let x = 10;
console.log(x);
// inferencia x annotation
let inferencia = 20;
// inferencia = "teste";
let annotation = 10;
// tipos básicos
let firstName = "Gabriel";
let age = 19;
let isAdmin = true;
firstName = "Cauã";
console.log(firstName);
// object 
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);
// tuplas
let myTuple;
myTuple = [5, "name", ["a", "b", "c"]];
// object literals -> {prop: value}
const user = {
    name: "Gabriel",
    age: 19
};
console.log(user);
/* user.job = "Programador"; */
// any 
let typeAny = 0;
console.log(typeAny);
typeAny = "teste";
console.log(typeAny);
typeAny = true;
console.log(typeAny);
typeAny = [];
console.log(typeAny);
// union type
let id = "10";
id = 20;
const userId = 10;
const productId = "20";
// enum
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
// literal types
let literalTypes;
/* literalTypes = "outroValor"; */
literalTypes = "valorUnico";
// funções
