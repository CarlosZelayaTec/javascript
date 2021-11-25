
// Arreglos

// let arreglo = ["rails", "laravel", "django", 1, {}, function(){}, [1,3,5]];

// arreglo.push("Nuevo"); //Agrega este nuevo elemento al final del arreglo.
// arreglo.unshift("Primero"); //Agrega este elemento al comienzo del arreglo.
// // arreglo.pop(); // Elimina el ultimo elemento del arreglo.
// // arreglo.shift(); //Elimina el primer elemento del arreglo.

// console.log(arreglo);

//For each

let lenguajes = ["ruby", "php", "javascript", "python"];

lenguajes.forEach(function(lenguaje, indice, arreglo){
    console.log(lenguaje + " " + indice, arreglo);
});

// lenguajes.forEach(function(lenguaje, indice, arreglo){
//     console.log(this);
// }, "asigna el valor nuevo al arreglo");
