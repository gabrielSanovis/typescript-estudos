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

myTuple = [5, "name", ["a", "b", "c"]]

// object literals -> {prop: value}

const user: { name: string, age: number } = {
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

function sum(a: number, b: number): number {
    return a + b;
}

console.log(sum(10, 54));
/* console.log(sum("10", "54")); */

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHelloTo("Gabriel"));

function logger(msg: string): void {
    console.log(msg);
}

logger("Mensagem de error");

function greeting(name: string, greet?: string): void {
    console.log(`Olá ${greet || "Sir"} ${name}`);
}

greeting("Gabriel");

// interfaces

interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams): number {
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 10, n2: 31 }));

function multiplyNumbers(nums: MathFunctionParams): number {
    return nums.n1 * nums.n2;
}

console.log(multiplyNumbers({n1: 4, n2: 5}));

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers));

// narrowing
// checagem de tipos

function doSomething(info: number | boolean): void {
    typeof info === "number"
    ? console.log(`O número é ${info}`)
    : console.log("Não é um número");
}

doSomething(true);
doSomething(10);