//Questão 01
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

//Questão 02
let sum = 0;
for (let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}

console.log(sum);

//Questão 03
for (let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}

let arithmeticAverage = sum/numbers.length;
console.log(arithmeticAverage);

//Questão 04
if(arithmeticAverage>20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor que 20');
}

//Questão 05
let bigger = 0;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index]>bigger){
        bigger = numbers[index];
    }
}

console.log(bigger);

//Questão 06
let oddNumbers = 0;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index]%2 != 0){
        oddNumbers += 1;
    }
}
if (oddNumbers === 0){
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(oddNumbers);
}

//Questão 07
let lower = 39024029384;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index]<lower){
        lower = numbers[index];
    }
}

console.log(lower);

//Questão 08
let array = [];
for (let index = 0; index < 25; index += 1){
    array.push(index + 1);
}

for (let index = 0; index < array.length; index += 1){
    console.log(array[index]);
}

//Questão 09
for (let index = 0; index < array.length; index +=1){
    console.log(array[index]/2);
}

//BONUS!!
//PARTE 1
let numbersBonus = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbersBonus.length; index += 1){
    for (let secondIndex = 0; secondIndex < numbersBonus.length; secondIndex += 1){
        let aux = 0;
        if(numbersBonus[index] < numbersBonus[secondIndex]){
            aux = numbersBonus[index];
            numbersBonus[index] = numbersBonus[secondIndex];
            numbersBonus[secondIndex] = aux;
        }
    }
}

for (let index = 0; index < numbersBonus.length; index +=1){
    console.log(numbersBonus[index]);
}
//PARTE 2
for (let index = 0; index < numbersBonus.length; index += 1){
    for (let secondIndex = 0; secondIndex < numbersBonus.length; secondIndex += 1){
        let aux = 0;
        if(numbersBonus[index] > numbersBonus[secondIndex]){
            aux = numbersBonus[index];
            numbersBonus[index] = numbersBonus[secondIndex];
            numbersBonus[secondIndex] = aux;
        }
    }
}

for (let index = 0; index < numbersBonus.length; index +=1){
    console.log(numbersBonus[index]);
}
//PARTE 3
let newArray = [];

for (let index = 0; index < numbers.length; index += 1){
    if (index + 1 < numbers.length){
        newArray.push(numbers[index]*numbers[index + 1]);
    } else {
        newArray.push(numbers[index]*2);
    }
}

for (let index = 0; index < newArray.length; index +=1){
    console.log(newArray[index]);
}
