var numero = parseInt(prompt("Ingres un número"));

for(var i = 1; i <= numero; i++){
    if(numero % i == 0){
        console.log("Divisor: " + i)
    }
}