
// Categorizar un nuevo miembro

let edad = [48, 56, 39, 62, 50, 55];
let handicap = [-2, 24, 22, 5, 13, 10];

// El Ejercicio con ciclo For

// for (let i = 0; i < edad.length; i++) {
//     let acum = [];

//     acum[0] = edad[i];
//     acum[1] = handicap[i];

//     console.log();

//     function senior(){
//         console.log("[ " + edad[i] + " + " + handicap[i] + " ]" + " = Senior");
//     };
    
//     function open(){
//         console.log("[ " + edad[i] + " + " + handicap[i] + " ]" + " = Open");
//     };

//     if(acum[0] >= 55 && acum[1] >= 7 && acum[1] <= 26){
//         senior();
//     }else{
//         open();
//     }
// }

// El Ejercicio con funciones y forEach

function edads(){
    let sitioEdad = [];
    let sitioHandi = [];
    edad.forEach(function(edades, indice){
        if(edades >= 55){sitioEdad[indice] = 1;}
        else{sitioEdad[indice] = 2;}
    });

    handicap.forEach(function(handi, indice){
        if(handi >= 7 && handi <= 26){sitioHandi[indice] = 1}
        else{sitioHandi[indice] = 2}
    });

    console.log(sitioEdad);
    console.log(sitioHandi);

    for (let i = 0; i < edad.length; i++) {

        function senior(){
            console.log("[ " + edad[i] + " + " + handicap[i] + " ]" + " = Senior");
        }
        
        function open(){
            console.log("[ " + edad[i] + " + " + handicap[i] + " ]" + " = Open");
        }

        if(sitioEdad[i] == 1 && sitioHandi[i] == 1){senior();}
        else open(); }
    }


edads();