/*****************************************************************************************************************

Script que construye un reloj que se actualizará cada segundo y lo colocará en el elemento indicado en el parámetro de la función reloj.
He usado el formato de 12 horas (AM/PM) para darle un giro más al ejercicio.

Argumentos de la función:
- pEltoHTML: Id del elemento HTML que contendrá el mensaje. Con este parámetro, independizamos el script del documento html siendo válida para cualquier otro.


*****************************************************************************************************************/

//Variable global que nos va a permitir guardar el ID del elemento HTML en las sucesivas llamadas de la función (explicación más abajo)
var ubiReloj = null;

/*
Explicación de uso:
    setTimeOut tiene dos argumentos habituales:
        1ero -> función a la que llamar
        2ndo -> milisegundos que deben transcurrir hasta la llamada 
    Y además se le pueden añadir parámetros que se usarán en la función invocada en el primer parámetro.
    El caso es que cuando setTimeOut es llamado dentro de la misma función a la que invoca, el parámetro deja de estar definido y no funciona
    en las sucesivas llamadas. Por lo tanto, si queremos guardar el elemento HTML en el que debe mostrarse el reloj, en la primera llamada
    debemos sacar el contenido del parámetro fuera de la función y colocarlo en una variable global para poder usarlo en el resto de llamadas.

*/


function reloj(pEltoHTML) {

    //Asignamos el ID del elemento donde irá colocado el reloj a la variable global
    if(ubiReloj == null)
        ubiReloj = pEltoHTML;
    
    //Objeto con la fecha y hora actuales
    var ahora = new Date();
    
    //Variables que almacenarán los elementos que construirán el reloj
    var str_hora = "";
    var str_minutos = "";
    var str_segundos = "";
    var str_reloj = "";
    var str_am_pm = "";

    //Construcción de los dígitos de la hora con el formato 12 horas
    if(ahora.getHours() > 12)               //Si la hora 0-24 es mayor de 12, le restamos 12
        str_hora = ahora.getHours() - 12;
    else if(ahora.getHours() == 0)          //Si la hora 0-24 es 0, asignamos 12 
        str_hora = 12;
    else                                    //En cualquier otro caso, la hora 0-24 es similar al formato 12 h.
        str_hora = ahora.getHours();

    if(ahora.getHours() < 12)               //Si la hora 0-24 es < 12, el flag AM/PM tendrá el valor AM
        str_am_pm = "AM";
    else                                    //Si la hora 0-24 es >= 12, el flag AM/PM tendrá el valor PM
        str_am_pm = "PM"
    
    if(ahora.getMinutes()<10)               //Si los minutos son menos de 10, añadimos un 0 delante y
        str_minutos = "0"
    str_minutos += ahora.getMinutes();      //asignamos a la variable de minutos de construcción del reloj

    if(ahora.getSeconds()<10)               //Si los segundos son menos de 10, añadimos un 0 delante
        str_segundos = "0"
    str_segundos += ahora.getSeconds();     //asignamos a la variable de segundos de construcción del reloj

    //Construimos la cadena de reloj con todas la variables
    str_reloj = str_hora + ":" + str_minutos + ":" + str_segundos + " " + str_am_pm;

    //Seleccionamos el elemento en el documento y lo ponemos en el contenido
    document.getElementById(ubiReloj).innerHTML = str_reloj;

    //Llamamos a la función setTimeOut, que vuelve a llamar a esta función una transcurrido 1 segundo
    setTimeout("reloj()",1000,ubiReloj);
    
}

