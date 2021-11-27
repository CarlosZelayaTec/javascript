
let user = {
    name: "Carlos",
    edad: 20,
    lenguaje: "JavaScript"
}

let { name } = user; //Convierte en una variable la propiedad name.

let { edad, ...sobrante } = user; //Saca edad del objeto y las propiedades que queden las enlista en un nuevo objeto
                                    //llamado sobrante.

function saludar( {name} ) { //Hacemos destructuring para solo capturar la propiedad name del objeto user.
    console.log(name);
}
//// Otra sintaxis.
function saludarDos( {name: username} ) { //Hacemos destructuring con diferente sintaxis para solo capturar la propiedad name del objeto user.
    console.log(username);
}

saludar(user); //Como argumento ponemos todo el objeto, y gracias al destructuring solo capturara el necesario.
saludarDos(user);
// console.log(edad);
// console.log(sobrante);

//Al igual podemos hacer lo mismo con un arreglo 

let calificaciones = [10, 8, 9];

// let [ matematicas, ciencias, biologia ] = calificaciones; // Le asignamos a cada valor una variable.
// let [ matematicas, ...otrasCarlificaciones] = calificaciones; // Le asignamos a un valor una variable, y a los demas valores los guardamos en otro arreglo.

// console.log(matematicas, ciencias, biologia);
// console.log(matematicas, otrasCarlificaciones);

//Podemos hacer lo mismo con funciones

function obtenerCalificaciones(){
    return [10, 8, 9];
}

let [matematicas, ...otrasCarlificaciones] = obtenerCalificaciones(); //Agarra los valores que retorna la funcion y le hace un destructuring

console.log(matematicas);