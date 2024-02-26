//Constantes
const DIMENSION_ARRAY = 4;             //Dimensión de los arrays con los que vamos a trabajar
const VALOR_MAXIMO = 10;               //Los valores de los arrays estarán comprendidos entre 0 y este valor - 1

/*
Función que obtiene el número aleatorio entre 0 y el parámetro tope.
He usado el operador ternario que ahorra líneas de código (<expresion> ? instrucción en caso de true : instruccion en caso de false)
Comprueba que 'tope' sea un número y en caso positivo devuelve la expresión Math.floor(Math.random() * tope).
Math.random devuelve un número aleatorio entre 0 y 1 (sin poder ser 1 nunca)
Math.floor devuelve el máximo entero menor o igual a un número.
Al multiplicar el VALOR_MAXIMO por Math.random() (entre 0 y 1), siempre se va a producir un número aleatorio y menor que VALOR_MAXIMO.
Esta función podría usarse en cualquier otro contexto.

*/
function getAleatorio (tope){
    
    return isNaN(tope) == false
        ? Math.floor(Math.random() * tope)
        : false;

}

/*
Función que convierte el array en una cadena de texto que se pueda colocar en el documento html
Recorre el array concatenando los valores usando una ',' como separación
*/
function arrayToString (numeros){

    var texto = "";
    for(var i=0; i<numeros.length; i++){
        texto += numeros[i];
        if(i != numeros.length-1)
            texto += ",";
    }

    return texto;

}

/*
Función que genera los arrays y los mezcla en el orden indicado
*/
function mezclarArrays() {
    
    var array1 = [];   //Array1 vacío
    var array2 = [];   //Array2 vacío
    var array_merged = [];  //Array que albergará los valores de los dos arrays

    for(var i=0; i<DIMENSION_ARRAY; i++)                //Con un bucle for vamos rellenando el array con números aleatorios usando push()
        array1.push(getAleatorio(VALOR_MAXIMO));

    for(var i=0; i<DIMENSION_ARRAY; i++)                //Con un bucle for vamos rellenando el array con números aleatorios usando push()
        array2.push(getAleatorio(VALOR_MAXIMO));

    for(var i=0; i<DIMENSION_ARRAY; i++){               //Con un bucle recorremos los dos arrays y añadimos cada valor al array de mezcla de ambos
        array_merged.push(array1[i]);
        array_merged.push(array2[i]);
    }

    document.getElementById("array1").innerHTML = arrayToString(array1);     //Colocamos en el documento el array1
    document.getElementById("array2").innerHTML = arrayToString(array2);     //Colocamos en el documento el array1
    document.getElementById("merged_array").innerHTML = arrayToString(array_merged);   //Colocamos en el documento el array mezclado

}