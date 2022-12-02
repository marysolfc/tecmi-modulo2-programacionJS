

//Si numero1 <= 0 o numero2 <= 0 o numero1 no es numérico o numero2 no es numérico

do{
    var numero1 = parseInt(prompt('Introduce el primer número',0));
    var numero2 = parseInt(prompt('Introduce el segundo número',0));
}while(numero1<=0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2) )

console.log(numero1);
console.log(numero2);

if(numero1 === numero2){
    alert("LOS NÚMEROS SON IGUALES");
}else if(numero1 > numero2){
    alert("El numero mayor es: "+numero1 + "\nEl numero menor es: "+numero2);    
}else if(numero1 < numero2){
    alert("El numero mayor es: "+numero2);
    alert("El numero menor es: "+numero1);
}else{
    alert("Introduce números correctos")
}