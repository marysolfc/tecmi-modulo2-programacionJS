var suma = 0;
var contador = 0;
var numero = 0;
var media;

while(numero >=0 ){
    numero = parseInt(prompt("Introduce números hasta que uno sea número negativo"));
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma += numero;
        contador++;
    }
    console.log("valor de suma: " + suma + " valor de contador: " + contador);    
}
media = suma / contador;
alert("La suma de todos los números es: " + suma + "\nLa media de todos los números es: " + media);
