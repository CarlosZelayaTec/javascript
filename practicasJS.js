 
 /*
    Una lista con nombre de varias personas y los nombres que contengan
    exactamente 4 letras son amigos del usuario, de lo contrario no.

 */

const nombreConocidos = ["Jimmy", "Jorge", "Blazz", "Ryan", "Pepe", "Humberto", "Precario", "Lolo", "Agustin", "Mero"];

const amigos = (listaConocidos) => {
    let amigos = [];
    let i = 0;
    listaConocidos.forEach(nombres => {
        if(nombres.length === 4) { 
            amigos[i] = nombres;
            i++; 
        }
    })

    console.log(listaConocidos, " = ", amigos);
}

amigos(nombreConocidos);