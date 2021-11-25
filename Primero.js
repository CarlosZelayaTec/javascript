
    // let numeros = [5,6,7,2,56,3];

    // let nuevoArreglo = numeros.filter(function(numero){
    //     return numero % 2 === 0;
    // });

    // console.log(nuevoArreglo);

let lenguajes = ["ruby", "java", "c++", "python"];

let nuevoArreglo = lenguajes.filter(function(lenguaje){
    return lenguaje != "ruby";
});

console.log(nuevoArreglo);