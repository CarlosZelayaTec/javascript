
let arreglo = ["futbol", "java", "javascript", "perl", "ruby", "aguacate"];

// indexOf => posición
// includes => true/false

console.log(arreglo.indexOf("java"));
console.log(arreglo.includes("java", 1)); // el segundo argumento permite decirle al programa a partir de que indice empezar a buscar.

// find -> funcion prueba -> elemento encontrado
// findIndex -> funcion prueba -> posicion
// some -> funcion prueba -> true/false

let respuesta = arreglo.find(function(elemento, posicion, arreglo){
    return elemento === "java";
});
let respuesta = arreglo.findIndex(function(elemento, posicion, arreglo){
    return elemento === "java";
});
let respuesta = arreglo.some(function(elemento, posicion, arreglo){
    return elemento === "java";
});

// console.log(respuesta);