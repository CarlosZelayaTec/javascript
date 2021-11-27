
let estudiante = {
    nombre: "Carlos",
    saludar: function() { console.log("Hola soy " + this.nombre) } /* Con este function podemos reutilizar el this en otros objetos
                                                                    ya que adoptara el contexto en el que esta.*/
}

let alumno = {
    nombre: "Sebas",
    saludo: estudiante.saludar,
}

estudiante.saludar();
alumno.saludo();

/* ------------------------------------------------------ */

let estudianteDos = {
    nombre: "Carlos",
    saludarAlt: () => {console.log("Hola soy " + this.nombre)}, /*Al usar arrow function, se quedará en el contexto de este objeto
                                                                  así que si intentamos usar este método en otro objeto como lo hicimos
                                                                  arriba, nos daría un error, ya que el this se queda exclusivamente para
                                                                  este objeto en específico.  */

                                                                  //Aqui no podemos utilizar el This.
}

//Utilizando this con arrow function y una clase

function Estudiantes(){
    this.nombre = "Carlangas";
    this.saludar = () => {console.log("Hola soy " + this.nombre)};
}

let e = new Estudiantes();

e.saludar();

//Al usarlo de esta manera podemos utilizarlo como argumento y reasignarlo y su contexto no cambiará, osea no nos dará error.