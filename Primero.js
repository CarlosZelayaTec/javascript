
//Función pura: No produce efectos  secundarios.

let edades = [20];

function modificador(edades) {
    let copia = [...edades]; //Genero una copia
    copia[0] = 25; //Modifico la copia y no el valor original.
    return copia; //Para comunicar los cambios con el exterior es preferible utilizar la copia.
}

console.log(edades); //Imprime el primer valor de edades. linea 4
modificador(edades); // Modifica el valor de edades ya que estamos utilizando un valor de referencia
                    // Para eso creamos una copia y el valor original no sea afecatado.
console.log(edades); // El valor original no ha sido cambiado ya que creamos una copia del arreglo.

// Y basicamente eso es una Funcio Pura.