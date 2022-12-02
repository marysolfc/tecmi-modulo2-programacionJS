do{
    var numero1 = parseInt(prompt('Introduce el primer número',0));
    var numero2 = parseInt(prompt('Introduce el segundo número',0));
    if(numero1<0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2) ){
        prompt("Debes escribir números correctos");
    }
}while(numero1<0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2) )

var resultado = "La suma es: " + (numero1+numero2)+"<br/>" +
"La resta es: " + (numero1 - numero2) + "<br/>" +
"La multiplicación es: " + (numero1 * numero2) + "<br/>" +
"La división es: " + (numero1 / numero2) + "<br/>";

var resultadoCMD = "La suma es: " + (numero1+numero2)+"\n" +
"La resta es: " + (numero1 - numero2) + "\n" +
"La multiplicación es: " + (numero1 * numero2) + "\n" +
"La división es: " + (numero1 / numero2) + "\n";

document.write("<h2>Los números que diste son: " + numero1 + " y " + numero2 + "<br>El resultado es:<br> " + resultado + "</h2>");
alert("Los números que diste son: "+ numero1 + " y " + numero2 + "\n El resultadoCMD es:\n " + resultadoCMD);
console.log("Los números que diste son: "+ numero1 + " y " + numero2 + "\nEl resultadoCMD: \n" + resultadoCMD);
