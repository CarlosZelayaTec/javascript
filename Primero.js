
function hola(nombre) {
    if(nombre){
        var saludo = "Hola " + nombre; //Con var podemos tener el alcance a cualquier parte dentro de la función.
        //let saludo = "Hola" + nombre;     Aparentemente es el mismo código pero no es así.
                                        //ya que con let solo tenemos alcance dentro del bloque.
                                        //Asi que usando let la variable saludo solo estará disonible dentro del bloque IF.
                                        //Lo mismo pasa con Const.
    }

    console.log(saludo);
}

hola("Carlos");