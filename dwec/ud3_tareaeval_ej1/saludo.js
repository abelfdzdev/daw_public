/*****************************************************************************************************************

Función de construcción del saludo en función de la hora

Argumentos:
- pEltoHTML: Id del elemento HTML que contendrá el mensaje. Con este parámetro, independizamos la función del documento html siendo válida para cualquier otro.

*****************************************************************************************************************/

function saludar(pEltoHTML){                                                 
    
    //Objeto que contendrá la fecha y hora actuales
    var ahora = new Date();                                         
    
    //Variable que almacenará el contenido del mensaje
    var mensaje = "";                                               
    
    if(ahora.getHours() >= 6 && ahora.getHours() < 12)              //Si la hora actual está entre las 6 y las 12
        mensaje = "Buenos días";                                        //Buenos días
    else if (ahora.getHours() >= 12 && ahora.getHours() < 20)       //Si la hora actual está entre las 12 y las 20
        mensaje = "Buenas tardes";                                      //Buenas tardes
    else                                                            //Resto de casos posibles (entre las 20-24 y las 0-6)
        mensaje = "Buenas noches";                                      //Buenas noches

    //Seleccionamos el elemento y colocamos el mensaje
    document.getElementById(pEltoHTML).innerHTML = mensaje;          
}