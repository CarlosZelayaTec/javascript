
// JavaScript Object Notation -> JSON

let curso = { //Nombre Objeto
    titulo: "Curso profesional de JavaScript", //Propiedades
    formato: "Video",
    bloques: ["Introducción", "Funciones"],
    inscribir: function(){ //Tambien llamados metodos
        console.log("Inscrito");
    },
}

curso.inscribir();

curso.titulo = "Curso de React"; //Reescribir el valor de la propiedad.

console.log(curso.titulo);