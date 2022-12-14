const libro = new Libro(850,"Cien años de soledad","Gabriel García Márquez");
libro.obtenerTodosLosDatos();

const comic = new Comic(100,"Batman","Stan Lee",["dibujante1","Dibujante2"]);
comic.agregarIlustrador("Dibujante3");
comic.obtenerTodosLosDatos();

const carrito = new CarritoCompras();
carrito.agregarProducto(5,comic.precio);
carrito.agregarProducto(1,libro.precio);
carrito.imprimirTicket();
carrito.mostrarProductos();