/*****************************************************************************************************************

Función que construye el mensaje con la fecha y hora actuales y lo coloca en el elemento html designado

Argumentos:
- pEltoHTML: Id del elemento HTML que contendrá el mensaje. Con este parámetro, independizamos la función del documento html siendo válida para cualquier otro.

*****************************************************************************************************************/

function fecha_de_hoy(pEltoHTML) {
    
    //Objeto con la fecha y hora actuales
    var ahora = new Date(); 

    //Array con los nombres en español de los días de la semana
    var dias_semana = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]; 

    //Array con los nombres en español de los meses
    var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]; 

    //Concatenamos "Hoy es " con el valor del array correspondiente al día de la semana de hoy
    var mensaje = "Hoy es " + dias_semana[ahora.getDay()] + ", ";   

    //Concatenamos con la construcción de la fecha
    mensaje += ahora.getDate() + " de " + meses[ahora.getMonth()] + " de " + ahora.getFullYear();  

    //Y finalmente concatenamos con la construcción de la hora
    mensaje += " y son las " + ahora.getHours() + ":" + ahora.getMinutes();     

    //Una vez construido el mensaje, lo colocamos en el elemento html designado para ello
    document.getElementById(pEltoHTML).innerHTML = mensaje;

}