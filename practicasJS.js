
//Devuelve todos los numeros en que el entero sea divisible
// Si es un numero primo, devuelve un mensaje que diga que N es primo.

let divisor = (enteroPositivo) => {
    let numerosDivisibles = [];
    let indice = 0;

    for (let i = 1; i < enteroPositivo; i++) {
        let residuo = enteroPositivo % i;
        if(residuo == 0){
            numerosDivisibles[indice] = i;
            indice++;
        }
    }

    if(indice == 1){
        console.log(enteroPositivo + " Es un numero primo")
    }else { console.log(numerosDivisibles); }
}

divisor(20);