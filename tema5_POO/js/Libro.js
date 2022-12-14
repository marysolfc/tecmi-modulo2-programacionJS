const _privado = new WeakMap();
class Libro{
    constructor(precio,titulo,autor){
       const propiedades = {
        _precio : precio,
        _titulo : titulo,
        _autor : autor
       }
       _privado.set(this,{propiedades});
    }

    // Obtiene el título de un libro:
    get titulo() {
        return _privado.get(this).propiedades['_titulo'];
    }
    // Establece/modifica el título de un libro:
    set titulo(newTitulo) {
        return _privado.get(this).propiedades['_titulo'] = newTitulo;
    }
    // Obtiene el autor de un libro:
    get autor() {
        return _privado.get(this).propiedades['_autor'];
    }
    // Establece/modifica el autor de un libro:
    set autor(newAutor) {
        return _privado.get(this).propiedades['_autor'] = newAutor;
    }
    // Obtiene el precio de un libro
    get precio() {
        return _privado.get(this).propiedades['_precio'];
    }

    obtenerTodosLosDatos(){
        console.log( `Título: ${this.titulo}, Autor: ${this.autor}, Precio: ${this.precio}`);
    }
}
