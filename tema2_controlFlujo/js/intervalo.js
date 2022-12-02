// do{
//     var numero1 = parseInt(prompt('Introduce el primer número',0));
//     var numero2 = parseInt(prompt('Introduce el segundo número',0));
//     if(numero1<=0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) ){
//         prompt("Debes escribir números correctos");
//     }
// }while(numero1<=0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) )

var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

if (isNaN(numero1) || isNaN(numero2)) {
    document.write("<h2>Lo siento, debiste escribir números</h2>");
} else if (numero1 > numero2) {
    document.write(
        "<h2>Lo siento, el primer número debe ser menor que el segundo</h2>"
    );
} else {
    document.write(
        "<h1>De " + numero1 + " a " + numero2 + " están estos números:</h1>"
    );

    for (var i = numero1; i <= numero2; i++) {
        // document.write("<p> "+i+" </p>");
        document.write(i + " ");
    }

    console.log(
        "Los números impares que hay entre: " + numero1 + " y " + numero2 + " son: "
    );
    while (numero1 <= numero2) {
        if (numero1 % 2 != 0) {
            console.log(numero1);
        }
        numero1++;
    }
}
