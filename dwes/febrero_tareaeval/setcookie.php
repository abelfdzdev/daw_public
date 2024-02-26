<?php
    
    setcookie("ck_nombre",$_POST["tx_nombre"]);
    setcookie("ck_nombre2",$_POST["tx_nombre"]);
    setcookie("ck_nombre3",$_POST["tx_nombre"]);
    header("location:./muestranombre.php");

?>