


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