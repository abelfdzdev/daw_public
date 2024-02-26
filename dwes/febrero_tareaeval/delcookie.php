<?php
    
    $nombres_cookies = array_keys($_COOKIE);
    
    unset($_COOKIE);

    foreach($nombres_cookies as $key)
        setcookie($key,"",-1);

    header("location: index.php");
?>