<?php
class Dado {
    
    private $minNumDado;
    private $maxNumDado;

    function __construct($min,$max) {
        $this->setMinNumDado($min);
        $this->setMaxNumDado($max);
    }

    public function getMinNumDado(){
        return $this->minNumDado;
    }

    public function getMaxNumDado(){
        return $this->maxNumDado;
    }

    public function setMinNumDado($pMin){
        /*
            En esta función se asigna el valor entregado por parámetro y se comprueba que tenga coherencia:
            - Que sea entero
            - Que sea mayor que 0
            - Que sea menor que el maxNumDado, si éste está asignado

            Recibe:
                - $pMin: valor a asignar como número mínimo del dado
            Devuelve:
                - $this->minNumDado (true), si se ha producido la asignación
                - false, si no se ha producido la asignación
        */                         

        if(is_integer($pMin) && $pMin > 0){             //Comprobamos si el parámetro es un entero mayor que 0
            if(is_null($this->getMaxNumDado()))         //comprobamos si el valor máximo es nulo
                return $this->minNumDado = $pMin;       //si el valor máximo es nulo, asignamos $pMin a $this->minNumDado y retornamos el valor
            
            else if($pMin < $this->getMaxNumDado())     //si el valor máximo no es nulo, comprobamos si pMin es mayor que $this->maxNumDado
                return $this->minNumDado = $pMin;       //si es menor que maxNumDado, asignamos a pMin a $this->minNumDado y retornamos el valor
        }

        return false; //Si ha llegado hasta aquí, es que no se ha producido una asignación correcta el vamor $pMin a $this->minNumDado;
    }

    public function setMaxNumDado($pMax){
        /*
            En esta función se asigna el valor entregado por parámetro y se comprueba que tenga coherencia:
            - Que sea entero
            - Que sea mayor que 0
            - Que sea mayor que el minNumDado, si éste está asignado

            Recibe:
                - $pMax: valor a asignar como número máximo del dado
            Devuelve:
                - $this->maxNumDado (true), si se ha producido la asignación
                - false, si no se ha producido la asignación
        */                         

        if(is_integer($pMax) && $pMax > 0){             //Comprobamos si el parámetro es un entero mayor que 0
            if(is_null($this->getMinNumDado()))         //comprobamos si el valor máximo es nulo
                return $this->maxNumDado = $pMax;       //si el valor mínimo es nulo, asignamos $pMax a $this->maxNumDado
            
            else if($pMax > $this->getMinNumDado())     //si el valor mínimo no es nulo, comprobamos si pMax es mayor que $this->minNumDado
                return $this->maxNumDado = $pMax;       //si es mayor que maxNumDado, asignamos a pMax a $this->maxNumDado y retornamos el valor
        }

        return false; //Si ha llegado hasta aquí, es que no se ha producido una asignación correctamente
            
    }

    function tirarDado() {
        if($this->getMinNumDado() && $this->getMaxNumDado())    //Comprobamos que los valores max y min del dado no son nulos
            return rand($this->minNumDado,$this->maxNumDado);   //true-> devolvemos el valor aleatorio que se encuentra entre el max y el min
        else
            return false;                                       //false-> devolvemos false
    }

}

?>