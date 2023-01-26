//Questão 01

let n = 10;
let fatorial = 1;

for (let index = n; index > 0; index -= 1){
    fatorial *= index;
}

console.log(fatorial);

//Questão 02

let palavra = 'tryber';
let inversa = '';

for (let index = 0; index < palavra.length; index += 1){
    inversa += palavra[palavra.length - index - 1]
}

console.log(inversa);

//Questão 03

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array[0];
let maiorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }

    if (array[index].length < menorPalavra.length){
        menorPalavra = array[index];
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);
