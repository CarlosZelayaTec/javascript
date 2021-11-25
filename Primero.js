
    // Declaración de Función
function saludar() {
    console.log("Hola");
}

function cuadrado(numero) {
    return numero * numero;

        // Esta línea no  va a ejecutarse, ya que la ejecución de una función termina con un return.
    // console.log("Hola dev"); 
}

let numero_de_dos = cuadrado(5);

console.log(numero_de_dos);
console.log(cuadrado(8));

// Expresión de función
let func = function(){};