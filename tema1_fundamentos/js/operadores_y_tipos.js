var numero1 = 7;
var numero2 = 15;
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

alert("El resultado de la suma es: " + suma +"\nEl resultado de la resta es: " + resta + "\nEl resultado de la multiplicación es: " + multiplicacion + "\nEl resultado de la división es: " + division)

var numero_entero=24;
var cadena_texto = "Hola 'que' tal";
var verdadero_o_falso=true;
var numero_falso="33";

console.log(numero_entero + numero_falso); //el resultado es 2433 porque convirtió todo a cadena y concatenó los valores

numero_falso = parseInt(numero_falso); // el resultado es 57 y se utiliza la función parseInt para cambiar el valor de cadena a número también se puede utilizar la función Number
console.log(numero_entero + numero_falso); 

numero_entero += ""; // también se puede usar la función toString
console.log(numero_entero + 9); // el resultado es 249 porque el numero entero se convirtió a cadena y entonces concatenó con el 9 

console.log("Tipo de dato de la variable numero_entero:", typeof(numero_entero));
console.log("Tipo de dato de la variable cadena_texto:", typeof(cadena_texto));
console.log("Tipo de dato de la variable verdadero_o_falso:", typeof(verdadero_o_falso));
console.log("Tipo de dato de la variable numero_falso:", typeof(numero_falso));