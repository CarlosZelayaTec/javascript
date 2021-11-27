

numeros = [25, 10, 98, 255, 1024, 2, 69, 486];

function sumaNumerosBajos(numerosA) {
    let menorUno = Math.min(...numerosA);
    
    let sacar = numerosA.filter(valor =>{
        return valor != menorUno;
    });

    let menorDos = Math.min(...sacar);

    console.log(menorUno, menorDos + " = " + (menorUno + menorDos));
}

sumaNumerosBajos(numeros);