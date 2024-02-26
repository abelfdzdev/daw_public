//En el enunciado se indica que dado este prototipo...

function coche(modelo, color, kms, combustible) {  

    this.modelo = modelo;

    this.color = color;  

    this.kms = kms;  

    this.combustible = combustible;  

}  


//y creados estos objetos...

var elmio = new coche("Mercedes E330", "negro", 120000, "diésel");  

var eltuyo = new coche("BMV 318", "blanco", 210000, "gasolina");


/* se hace la siguiente pregunta: "¿se puede borrar un atributo con la siguiente sentencia?

delete elmio.matricula;

Y creo que la respuesta sería "sí, si existiese ese atributo".

Justificación:
En el prototipo del objeto no observamos que ese atributo esté definido.
Si mostramos por consola el objeto elmio...

*/
console.log("Objeto antes de intentar borrar nada");
console.log(elmio);

// vemos que se muestra exactamente igual que después de borrar ese atributo "fantasma" y además no da error
delete elmio.matricula;
console.log("Después de borrar el atributo matrícula");
console.log(elmio);

// Sin embargo, si intentamos borrar el atributo "color" y volvemos a mostrar el objeto en consola, vemos que ya no está
delete elmio.color;
console.log("Después de borrar el atributo color");
console.log(elmio);

//El documento html incluye una captura de la consola ejecutando estas instrucciones

/*
    Conclusión:
    Se puede utilizar delete para borrar un atributo de un objeto, siempre que exista. En caso de no existir, no pasará nada.

*/