let x: number = 10;

console.log(x);

// inferencia x annotation

let inferencia = 20;
// inferencia = "teste";

let annotation: number = 10;


// tipos básicos
let firstName: string = "Gabriel";
let age: number = 19;
let isAdmin: boolean = true;

firstName = "Cauã";
console.log(firstName);

// object 
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);

myNumbers.push(5);
console.log(myNumbers);

// tuplas

let myTuple: [number, string, string[]];

myTuple = [ 5, "name", [ "a", "b", "c" ] ]

// object literals -> {prop: value}

const user: {name: string, age: number} = {
    name: "Gabriel",
    age: 19
}

console.log(user);

/* user.job = "Programador"; */

// any 

let typeAny: any = 0;
console.log(typeAny);

typeAny = "teste";
console.log(typeAny);

typeAny = true;
console.log(typeAny);

typeAny = [];
console.log(typeAny);

// union type
let id: string | number = "10";

id = 20;

// type alias

type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "20";

// enum

enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.M
}

console.log(camisa);

// literal types

let literalTypes: "valorUnico" | null;

/* literalTypes = "outroValor"; */

literalTypes = "valorUnico";

// funções