//Constantes
const DIMENSION_ARRAY = 4;             //Dimensión del array con el que vamos a trabajar
const VALOR_MAXIMO = 10;               //Los valores del array estarán comprendidos entre 0 y este valor - 1

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
Función que crea el array, llama a las funciones que obtiene el mayor y el menor número y los coloca en el documento html
*/
function obtenerNumeros (){

    var numeros = [];   //Array vacío que albergará los números

    for(var i=0; i<DIMENSION_ARRAY; i++)                //Con un bucle for vamos rellenando el array con números aleatorios usando push()
        numeros.push(getAleatorio(VALOR_MAXIMO));

    document.getElementById("num_listado").innerHTML = arrayToString(numeros);  //Colocamos en el documento el array usando la función que lo convierte a string
    document.getElementById("num_mayor").innerHTML = getMayor(numeros);     //Colocamos en el documento el número mayor usando la función que lo devuelve
    document.getElementById("num_menor").innerHTML = getMenor(numeros);     //Colocamos en el documento el número menor usando la función que lo devuelve
    document.getElementById("media").innerHTML = getMedia(numeros);         //Colocamos en el documento el valor de la media usando la función que lo devuelve

}

/*
Función que devuelve el número mayor de los que hay en el array.
Recibe como parámetro un array y devuelve el mayor de los valores    
*/
function getMayor (numeros){

    var mayor = 0;                          //Variable que albergará el valor máximo del array

    for(var i=0; i<numeros.length; i++)     //Usamos un bucle para recorrer el array y si el valor del array es mayor que el valor de la variable 'mayor',
        if(numeros[i] > mayor)              //se asigna el valor del array a la variable 'mayor'
           mayor = numeros[i];
    
    return mayor;

}

/*
Función que devuelve el número menor de los que hay en el array.
Recibe como parámetro un array y devuelve el menor de los valores    
*/
function getMenor (numeros){

    var menor = undefined;                  //Variable que albergará el valor menor del array
                                            //En este caso partimos de un valor undefined porque no sabemos cuál puede ser el número máximo que puede tener
                                            //cada uno de los valores del array. Podríamos poner la constante VALOR_MAXIMO como valor de inicialización
                                            //pero la función entonces ya sería dependiente de un valor externo... y yo prefiero, en la medida de lo posible
                                            //que las funciones sean lo mas independientes y estancas posible.

    for(var i=0; i<numeros.length; i++){    //Usamos un bucle para recorrer el array y si el valor del array es menor que el valor de la variable 'menor',
        if(menor == undefined)              //se asigna el valor del array a la variable 'menor'
            menor = numeros[i];             
        else if(numeros[i] < menor)         
            menor = numeros[i];
    }
    return menor;

}

/*
Función que devuelve la media de los valores incluidos en el array.
Recibe como parámetro un array y devuelve la media
*/
function getMedia (numeros) {

    var sumatorio = 0;                      //Variable que irá almacenando el acumulado de los valores del array

    for(var i=0; i<numeros.length; i++)     //Usamos un bucle para recorrer el array e ir acumulando los valores dentro de la variable 'sumatorio'
        sumatorio += numeros[i];

    return sumatorio/numeros.length;        //Devolvemos el valor de sumatorio dividido entre la cantidad de valores que tiene el array (media)

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