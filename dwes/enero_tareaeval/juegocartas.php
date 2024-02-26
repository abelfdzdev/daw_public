<?php

//En la medida de lo posible, he puesto tipos a los parámetros
//y valores de retorno

//Clase carta
class Carta {

    private string $Tipo;
    private int $Puntos;

    //Constructor de la clase carta
    public function __construct(){

        /* Aquí, creo que lo lógico sería recibir por parámetros
        los valores a asignar a las dos propiedades        
        */

    }

}

//Clase enTipoCarta
//Para ser sincero, no termino de entender la funcionalidad
//de que enTipoCarta herede de Carta. Para mí sería un tipo enum
//si no fuera por la obligación de la herencia.
class enTipoCarta extends Carta {
    
    const Borde = 0;
    const Color = 1;
    const Efecto = 2;
    const Mensaje = 3;
    const Marco = 4;

    //Constructor de la clase enTipoCarta
    public function __construct()
    {
        /*Aquí creo que lo lógico sería llamar al constructor
        de la clase padre para asignar valores a las propiedades
        heredadas
        */
    }

}

//Tipo enum para enEtapa. Solo aporta un grupo de posibles valores
//para asignar a una propiedad de la clase Partida
enum enEtapa {

    case Compra;
    case Armado;
    case Resultado;
    case Fin;

}

//Clase Cartel
class Cartel {

    private Carta $Borde;
    private Carta $Color;
    private Carta $Efecto;
    private Carta $Mensaje;

    //Constructor para la clase Cartel
    public function __construct() {}

    public function ObtenerPuntos(): int {
        //Código de relleno para que no "proteste" VSCode
        return 0;
    }

    //Getters y setters para las propiedades de la clase
    public function getBorde(): Carta {
        return $this->Borde;
    }

    public function setBorde(Carta $pBorde): void{
        $this->Borde = $pBorde;
    }

    //... y así con el resto de propiedades

}

//Clase Jugador que hereda de la clase Partida
abstract class Jugador extends Partida {

    //Constructor para la clase Jugador
    public function __construct(){
            //Si es necesario, tendrá que llamar al constructor
            //de la clase padre
    }

    //Método abstracto Jugar que tendrá que implementar las
    //clases que hereden de jugador. Aquí hay un error en la interpretación
    //porque se está intentado sobrescribir como abstracto el método Jugar
    // que existe en la clase padre
    public abstract function Jugar (): void;

}

//Clase partida
class Partida {
    
    private int $Dia;
    private enEtapa $Etapa;

    //Constructor de la clase partida
    public function __construct() {}

    //Distintos métodos para el juego que ni reciben ni
    //devuelven nada
    public function ArmarCartel(): void{}
    public function Comprar(): void {}
    public function Jugar(): void{}
    
    //Otro grupo de métodos que no reciben nada pero devuelven
    //cada uno un array de cartas
    public function VerCartas(): array {
        //Código de relleno para que haya algo que devolver
        //y no "proteste" VSCode
        $c = array(new Carta(),new Carta());
        return $c;
    }
    public function VerCartasRival(): array {
        //Código de relleno para que haya algo que devolver
        //y no "proteste" VSCode
        $c = array(new Carta(),new Carta());
        return $c;
    }
    public function VerCartasTienda(): array {
        //Código de relleno para que haya algo que devolver
        //y no "proteste" VSCode
        $c = array(new Carta(),new Carta());
        return $c;
    }

}



?>