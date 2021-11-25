
// metodo map

let numeros = [2,3,1,5,34];

/* 
    let cuadrados = [];

    for (let i = 0; numeros.length; i++){
        cuadrados[i] = numeros[i] * numeros[i];
    }

    console.log(cuadrados);
*/

let cuadrados = numeros.map(function(numero){
    return numero * numero;
});

console.log(numeros);
console.log(cuadrados);

/* 
    2 => [4]
    3 => [4, 9]
    1 => [4, 9, 1]
    5 => [4, 9, 1, 25]
    34 => [4, 9, 1, 25, 1156]
*/

let cadenaNumeros = ["10", "15", "5", "2"];

let numerosInt = cadenaNumeros.map(function(numString){
    return parseInt(numString);
});

console.log(numerosInt);