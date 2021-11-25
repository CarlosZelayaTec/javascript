
// let arreglo = [1,2,3,4,5,6];
// let nombre = "Carlos";

// console.log(arreglo);
// console.log(...arreglo); //Spread syntax
// console.log(...nombre); //Spread syntax

// Rest Parameters (...)

function promedio(alumno, ...calificaciones){
    console.log(alumno, calificaciones);
}

promedio("Carlos", 9,8,7,9,8,7);