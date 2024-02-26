<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link type="text/css" rel="stylesheet" href="styles.css">
        <script>
            function activaBoton () {
                
                var cajaTexto = document.getElementById("tx_nombre").value;
                if(cajaTexto.length == 0)
                    document.getElementById("su_enviar").disabled = true;
                else    
                    document.getElementById("su_enviar").disabled = false;
                
            }
        </script>
    </head>
    <body onload="activaBoton();">
        <div id="flex-container">
            <div id="contenido">
                
                <div id="titulo"><h3>Formulario de usuario</h3></div>

                <form name="fo_cookie" action="setcookie.php" method="post">
                
                    <div id="usuario">
                        <label for="tx_nombre">Introduzca nombre para el usuario:</label>
                        <input type="text" name="tx_nombre" id="tx_nombre" onkeyup="activaBoton();" />
                    </div>
                    
                    <div id="envio">
                        <input type="submit" name="su_enviar" id="su_enviar" value="Acceder"/>
                    </div>
                    
                </form>

            </div>
        </div>
    </body>
</html>