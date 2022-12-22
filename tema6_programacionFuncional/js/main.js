const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data);
/*
1. Crea una función atrsToCadena:
a. Debe recibir dos parámetros: el objeto, que son las clases de este tag.
b. Obtén las llaves del objeto que se está pasando, antes crea una variable y utiliza la función de JavaScript Objet.keys del objeto que se está
pasando.
c. Crea otra variable atributos del tipo array.
d. Crea un ciclo for con el que vas a recorrer el contenido de keys.
e. Guarda en una nueva variable atributo el atributo que va a ser igual a la llave de la posición y este se va a agregar al arreglo que se creó
mediante un push de la manera atributo = atributo del objeto.
f. Genera el string utilizando la función de JavaScript .join que regresa el contenido convertido en una cadena.
g. Regresa el string resultante.
*/
const atrsToCadena = (objeto = {}) => {
    const keys = Object.keys(objeto);
    const atributos = [];
    for(let i=0;i<keys.length;i++){
        let atributo = keys[i];
        atributos.push(`${atributo} = "${objeto[atributo]}"`);
    } 
    // keys.map((elemento,indice) => {
    //     let atributo = indice;
    //     atributos.push(`${atributo} = "${objeto[atributo]}"`);
    // });
    const cadena = atributos.join(' ');
    return cadena;  
}

/*
2. Crea la función atrsTag que reciba un objeto y retorne la cadena completa para el html:
a. A esta función se le van a pasar dos parámetros: un objeto que contiene el tag y la clase con sus atributos. 
Además, se requiere pasarle el contenido de ese tag.
b. Debe validar si la parte en donde vienen la clase y sus atributos no está vacía, en caso de estarlo, solo regresará el tag sin clases que modifiquen
su apariencia o comportamiento. Por otro lado, en caso de que sí traiga atributos, mandará a llamar a la clase atrsToCadena y esta función
convertirá esos atributos en cadena que se pintará después del tag, luego el contenido y el tag de cerradura.
c. Debe retornar un string.
*/
const atrsTag = objeto => (contenido ='') => `<${objeto.tag}${objeto.atributos ? ' ': ''} ${atrsToCadena(objeto.atributos)}> ${contenido} </${objeto.tag}> ` //modifica el tag

/* 
3. Crea una función expresada que armará los tags:
a. Nombra a esta función tag.
b. Esta función valida si el tipo de dato del objeto recibido es un string, si lo es, entonces manda a llamar a la función atrsTag (atributos de tag) y
se le pasará como atributo la propiedad tag (tag:t). En caso contrario, solo pásale tag (t).
*/
const tag = t => typeof t === 'string' ? atrsTag({tag : t}) : atrsTag(t);

//const tag = t =>{
    // if(typeof t === 'string')
    // {
    //     return atrsTag({tag : t})
    // }
    // return atrsTag(t);
//}

const filaTablaTag = tag('tr');
const filaTabla = elementos => compose(filaTablaTag, celdasTabla)(elementos);

const celdaTabla = tag('td');
const celdasTabla = elementos => elementos.map(celdaTabla).join('');

const iconoBorrar = tag({tag:'i', atributos:{class:'fa fa-trash-alt'}})('');

// 2. Crea cuatro variables en el archivo main.js para acceder a los inputs, una por cada input (descripcion, calorias, carbohidratos y proteina)
var descripcion = $("#descripcion");
var calorias = $("#calorias");
var carbohidratos = $("#carbohidratos");
var proteina = $("#proteina");
// 3. Crea una variable de tipo arreglo en la que se van a almacenar los elementos una vez que se cumplan con las validaciones.
var arreglo = []; 

/*
7. Si se coloca un valor, es necesario eliminar la clase 'is-invalid'. Para lograrlo, utiliza el método .keypress() de jQuery, manda llamar a este método en
un código que deberás colocar por fuera de la función validarInput() (de preferencia que lo coloques antes de la función), pasándole una función
flecha con el método removeClass a cada elemento
*/
descripcion.keypress(() => {
    descripcion.removeClass('is-invalid');
    });

calorias.keypress(() => {
    calorias.removeClass('is-invalid');
    });

carbohidratos.keypress(() => {
    carbohidratos.removeClass('is-invalid');
    });

proteina.keypress(() => {
    proteina.removeClass('is-invalid');
    });

/* 5. En el archivo main.js, crea esta función expresada y valida que los campos input no estén vacíos utilizando el método val() de cada input. En caso
de que estén vacíos, agrega la clase de bootstrap 'is-invalid', para lo cual puedes utilizar un operador ternario similar a este para cada elemento:
*/
const validarInput = function(){
    descripcion.val() ? '' : descripcion.addClass("is-invalid");
    calorias.val() ? '' : calorias.addClass("is-invalid");
    carbohidratos.val() ? '' : carbohidratos.addClass("is-invalid");
    proteina.val() ? '' : proteina.addClass("is-invalid");

    /* 8. Regresando a la función validarInput(), valida que todos los inputs tengan un valor, si eso ocurre, entonces agrega ese elemento a la lista
mandando a llamar a la función agregar().*/
    if(
        descripcion.val() && 
        calorias.val() && 
        carbohidratos.val() && 
        proteina.val()
    ) agregar();
}

/*
9. Como aún no existe la función agregar, créala debajo de validarInput() de la siguiente manera:
a. Declárala como función expresada.
b. Genera un nuevo objeto, que es el que se va a agregar a la lista, nómbralo nuevoElemento y llénalo con los valores del input.
c. Asegúrate de que los valores para calorias, carbohidratos y proteinas sean numéricos, esto lo podrías lograr utilizando parseInt.
d. Con el objeto ya completo, utiliza el método push para que lo agregues a la lista.
e. Para probar, podrías imprimir en consola tu lista y debería arrojarte algo parecido a esto:
*/
const agregar = ()=>{
    let nuevoElemento = {
        descripcion : descripcion.val(),
        calorias : parseInt(calorias.val()),
        carbohidratos : parseInt(carbohidratos.val()),
        proteina : parseInt(proteina.val())
    };
    arreglo.push(nuevoElemento);
    limpiarInput();
    actualizarTotales();
    renderElementos();
}

/* 10. Cada que se introduce un elemento, los inputs no se limpian, por lo que es necesario limpiarlos cada que se ingresa un elemento a la lista. Para
realizarlo, crea una función limpiarInputs en la que le vas a pasar un valor vacío a cada input de la siguiente manera:
 */
const limpiarInput = () => {
    descripcion.val('');
    calorias.val('');
    carbohidratos.val('');
    proteina.val('');
}

const actualizarTotales = () =>{
    let calorias = 0, carbohidratos = 0, proteina = 0;
    arreglo.map(elemento => {
            calorias += elemento.calorias,
            carbohidratos += elemento.carbohidratos,
            proteina += elemento.proteina;
        }
    );
    $('#totalCalorias').text(calorias);
    $('#totalCarbohidratos').text(carbohidratos);
    $('#totalProteina').text(proteina);
}

const renderElementos = () => {
    $('tbody').empty();
    arreglo.map((elemento,indice) => {
        const botonEliminar = tag({
            tag:'button',
            atributos:{
                class:'btn btn-outline-danger',
                onclick: `eliminarElemento(${indice})`
            
            }
        })(iconoBorrar)
        $('tbody').append(filaTabla([elemento.descripcion,elemento.calorias,elemento.carbohidratos,elemento.proteina,botonEliminar]))
});
}

const eliminarElemento = (indice) => {
    arreglo.splice(indice,1);
    actualizarTotales();
    renderElementos();
}
