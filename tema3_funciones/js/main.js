//Ejercicio 1:
//declaracion de funcion antigua

function contarCaracteres(cadena=""){  
    if(cadena === "") {
     console.warn("No ingresaste ninguna cadena");
    }
     else{
     let numero = cadena.length;
     console.log(`La cadena ${cadena} tiene ${numero} caracteres`);
     }
}

//simplificando la funcion de arriba
function contarCaracteres1(cadena=""){  
    return cadena === "" ? console.warn("No ingresaste ninguna cadena") : console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`);

}
contarCaracteres1();
contarCaracteres1("'Hola Mundo'");

// declaracion de funcion anónima
const contarCaracteres2=function(cadena=""){
    cadena === "" ? console.warn("No ingresaste ninguna cadena") : console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
}

contarCaracteres2();
contarCaracteres2("'Hola Mundo anónimo'");

// declaracion de función flecha
const contarCaracteres3=(cadena="") => cadena === "" ? console.warn("No ingresaste ninguna cadena") : console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
contarCaracteres3();
contarCaracteres3("'Hola Mundo con flecha =>'");

/* ==================================================== */
// Ejercicio 2: Función anónima
const pelicula = function(nombre){
    console.log("El nombre de la película es: " + nombre);
}
pelicula("Avengers");

//funcion normal
// function sumame(num1,num2){
//     let suma = num1+num2;
//     console.log(suma);
// }
// sumame(2,4);

// callback
function sumame(num1,num2,sumaYmuestra,sumaPorDos){
    let suma = num1+num2;
    sumaYmuestra(suma);
    sumaPorDos(suma*2);
}

sumame(2,4,
    function(resultado){console.log('La suma es:',resultado)},
    function(resultado){console.log("La suma por dos es: ",resultado)}
    );

// conversión a funciones flecha
sumame(2,4,
    (resultado)=>console.log('La suma es:',resultado),
    (resultado)=>console.log("La suma por dos es: ",resultado)
    );