<?php

$name = $_GET['costumer-name']   ;
$text = $_GET['costumer-message'];

$url = 'https://wa.me/558199412896/?text=Olá, meu nome é '.$name.'. '.$text;

header('Location'.$url, true);

?>