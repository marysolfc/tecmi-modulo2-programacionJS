const factorial=(numero=undefined)=>{
    if(numero===undefined) return console.warn("No ingresaste un numero");    
    if(typeof numero != "number") return console.error(`El valor de ${numero} ingresado no es un numero`);
    if(numero === 0) return console.error("El numero ingresado no puede ser cero");
    if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");

    let factorial = 1;
    for (let i = numero; i > 1;i--){
        factorial*=i;
    }
    return console.info(`El factorial del numero ${numero} es ${factorial}`);
}
    factorial();
    factorial("5")
    factorial(1,2,3)
    factorial(0)
    factorial(-5)
    factorial(5)