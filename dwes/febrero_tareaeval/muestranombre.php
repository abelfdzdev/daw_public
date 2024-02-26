<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link type="text/css" rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div id="flex-container">
            <div id="contenido">
                <div id="usuario">Hola <b><?php echo $_COOKIE["ck_nombre"]; ?></b></div>
                <form action="delcookie.php" method="post">
                    <div id="envio">
                        <input type="submit" value="Destruir cookies"></input>
                    </div>    
                </form>
            </div>
        </div>
    </body>
</html>