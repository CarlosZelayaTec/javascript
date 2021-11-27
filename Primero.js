

let user = {
    edad: 20,
    nombre: "Carlos",
}

let esquema = {
    nivel: 2,
}

let copia = { ...user, ...esquema, nombre: "Carlangas" }; //Creamos una copia de los objetos y los combinamos con el Spread operator.

let copia1 = Object.assign({}, user); //Para crear una copia. Como el primer argumento son unas llaves vacías significa que esta creando una copia
let copia2 = Object.assign(user, { permisos: true}, {formato: "DVD"} ); // El primer argumento es donde se almacenará los elementos. Aqui estamos reescribiendo el objeto User pero el resultado se almacena en copia.
let copia3 = Object.assign(user, esquema); //Para combinar dos objetos.

console.log(copia);
console.log(copia1);
console.log(copia2);
console.log(copia3);