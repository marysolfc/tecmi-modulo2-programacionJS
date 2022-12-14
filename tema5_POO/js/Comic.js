class Comic extends Libro{
    constructor(precio,titulo,autor,ilustradores){
        super(precio,titulo,autor);
        this.ilustradores = ilustradores;
    }

    agregarIlustrador(nuevoIlustrador){
        this.ilustradores.push(nuevoIlustrador);
    }

    obtenerTodosLosDatos(){
        super.obtenerTodosLosDatos();
        console.log( `Ilustradores: ${this.ilustradores}` );
        
    }
}

