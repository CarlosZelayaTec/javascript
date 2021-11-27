
class Curso{

    #title = "JavaScript";

    constructor(titulo){
        this.titulo = titulo;
    }

    inscribir = () => console.log("Inscrito");
}

let js = new Curso("Curso de JavaScript");

console.log(js.#title);
js.inscribir();