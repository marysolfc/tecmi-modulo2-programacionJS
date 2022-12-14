class CarritoCompras{
    constructor(){
        this.productos = [];
    }

    agregarProducto(cantidad, precio){
        this.productos.push(...Array(cantidad).fill(precio));
    }
    mostrarProductos(){
        console.log(this.productos);
    }
    calcTotal(){
        return this.productos
        .map(precio => precio)
        .reduce((ac,precio) => ac + precio,0);
    }
    imprimirTicket(){
        console.log(`Total a pagar ${ this.calcTotal() }`);
    }
}