const a = 0;
const b = 3;
const c = 4;

// Questão 01
console.log("Adição: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + a * b);
console.log("Divisão: " + a / b);
console.log("Módulo: " + a % b + "\n");

//Questão 02
if (a > b) {
    console.log(a + " é maior que " + b + "!\n");
} else {
    console.log(b + " é maior que " + a + "!\n");
}

//Questão 03
if (a > b && a > c) {
    console.log(a + " é o maior dos números!" + "\n");
} else if (b > a && b > c) {
    console.log(b + " é o maior dos números!" + "\n");
} else if (c > a && c > b) {
    console.log(c + " é o maior dos números!" + "\n");
}

//Questão 04
if (a > 0) {
    console.log('positive' + "\n");
} else if (a < 0) {
    console.log('negative' + "\n");
} else {
    console.log('zero' + "\n");
}

//Questão 05
let ang1 = 80;
let ang2 = 30;
let ang3 = 70;

if (ang1 > 0 && ang2 > 0 && ang3 > 0) {
    if ((ang1 + ang2 + ang3) === 180) {
        console.log(true+ "\n");
    } else {
        console.log(false + "\n");
    }
} else {
    console.log("Valor inválido!" + "\n");
}

//Questão 06
let choice = 'KING';

switch (choice.toLowerCase()) {
    case 'pawn':
        console.log('It can move forward one or two squares. If a pawn has already moved, then it can move forward just one square at a time.' + "\n");
        break;
    case 'bishop':
        console.log('A bishop can move diagonally as many squares as it likes.');
        break;
    case 'knight':
        console.log('It moves one square left or right horizontally and then two squares up or down vertically, OR it moves two squares left or right horizontally and then one square up or down vertically.' + "\n");
        break;
    case 'rock':
        console.log('It can move as many squares as it likes left or right horizontally.' + "\n");
        break;
    case 'queen':
        console.log('It can move as many squares as it likes left or right horizontally, or as many squares as it likes up or down vertically.' + "\n");
        break;
    case 'king':
        console.log('It can only move one square in any direction.' + "\n");
        break;
}

//Questão 07
let nota = 87;

if(nota > 100 || nota < 0){
    console.log('Nota inválida!');
} else {
    if (nota <= 100 && nota >= 90){
        console.log('A' + "\n");
    } else if (nota < 90 && nota >= 80){
        console.log('B' + "\n");
    } else if (nota < 80 && nota >= 70){
        console.log('C' + "\n");
    } else if (nota < 70 && nota >= 60){
        console.log('D' + "\n");
    } else if (nota < 60 && nota >= 50){
        console.log('E' + "\n");
    } else if (nota < 50){
        console.log('F' + "\n");
    }
}

//Questão 08
const num1 = 3;
const num2 = 4;
const num3 = 5;

if (num1%2 || num2%2 || num3%2 === 0){
    console.log(true + "\n");
} else {
    console.log(false + "\n");
}

//Questão 09
const n1 = 2;
const n2 = 4;
const n3 = 6;

if (n1%2 || n2%2 || n3%2 != 0){
    console.log(true + "\n");
} else {
    console.log(false + "\n");
}

//Questão 10
const cost = 100;
const sellingPrice = 150;

if (cost < 0 || sellingPrice < 0){
    console.log("Valor inválido!"+ "\n");
    //break;
} else {
    let allCosts = cost + (0.2*cost);
    let profit = sellingPrice - allCosts;
    console.log('O lucro será de ' + profit + ".\n");
}

//Questão 11
const salary = 3000;
let postTributesSalary;
let irTribute;

if (salary <= 1556.94){
    postTributesSalary = salary - (salary*0.8);
} else if (salary > 1556.94 && salary <= 2594.92){
    postTributesSalary = salary - (salary*0.09);
} else if (salary > 2594.92 && salary <= 5189.82){
    postTributesSalary = salary - (salary*0.11);
} else if (salary > 5189.82){
    postTributesSalary = salary - (salary-570.88);
}

console.log('O salário pós tributo de INSS será de ' + postTributesSalary + ".\n");

if (postTributesSalary <= 1903.98){
    console.log('Isento de imposto de renda, o salário final é ' + postTributesSalary + '.\n');
} else if (postTributesSalary > 1903.98 && postTributesSalary <= 2826.65){
    irTribute = ((0.075*postTributesSalary)-142.80);
    postTributesSalary = postTributesSalary - irTribute;
    console.log('O salário final será ' + postTributesSalary + '.\n');
} else if (postTributesSalary > 2826.65 && postTributesSalary <= 3751.05){
    irTribute = ((0.15*postTributesSalary)-354.80);
    postTributesSalary = postTributesSalary - irTribute;
    console.log('O salário final será ' + postTributesSalary + '.\n');
} else if (postTributesSalary > 3751.05 && postTributesSalary <= 4664.68){
    irTribute = ((0.225*postTributesSalary)-636.13);
    postTributesSalary = postTributesSalary - irTribute;
    console.log('O salário final será ' + postTributesSalary + '.\n');
} else if (postTributesSalary > 4664.68){
    irTribute = ((0.275*postTributesSalary)-869.36);
    postTributesSalary = postTributesSalary - irTribute;
    console.log('O salário final será ' + postTributesSalary + '.\n');
}