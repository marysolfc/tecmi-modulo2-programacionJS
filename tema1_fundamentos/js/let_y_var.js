// prueba con var
var numero = 30;
console.log(numero); // valor esperado 30
if(true){
    var numero = 40;
    console.log(numero); // valor esperado 40
}
console.log(numero); //cual es el valor de la variable numero? R= 40

//prueba con let

var texto = "Curso de JS";
console.log(texto); //valor esperado "Curso de JS"

if(true){
    let texto = "Curso de PHP";
    console.log(texto); // valor esperado "Curso de PHP"
}
console.log(texto); // Cual es el valor del texto? R= curso de JS
