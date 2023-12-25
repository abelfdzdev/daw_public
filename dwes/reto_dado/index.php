<?php
    require('Dado.php');

    $miDado = new Dado(1,8);
    $valorTirada = $miDado->tirarDado();

    if($valorTirada)
        $mensaje = "Tirada: ".$valorTirada;
    else
        $mensaje = "Configuración de dado incorrecta";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php echo($mensaje); ?>
</body>
</html>