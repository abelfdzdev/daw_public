<?php
    
    function pinta_cardinal_ordinal () {
        $ordinales = ['Primero','Segundo','Tercero','Cuarto','Quinto','Sexto','Séptimo','Octavo','Noveno','Décimo'];
        for($i=1 ; $i<=10 ; $i++)
            echo '
                <tr>
                    <td>'.$i.'</td>
                    <td class="ordinal">'.$ordinales[$i-1].'</td>
                </tr>

            ';
    }

?>


<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            * {
                font-style: italic;
            }
            table {
                border-spacing: 0px;
            }
            td,th {
                border: 1px solid #000000;
            }
            th {
                background-color: #66CCFF;
            }
            .ordinal {
                width: 400px;
            }
        </style>
    </head>
    <body>
        <table>
            <tr>
                <th>Cardinal</th>
                <th>Ordinal</th>
            </tr>

            <!--
            <?php pinta_cardinal_ordinal(); ?>
            -->

        </table>
    </body>
</html>