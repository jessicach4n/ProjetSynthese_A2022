<?php
// Nom du fichier  : header.php
// Description     : Fichier contenant les headers HTTP
// Auteur          : Jessica Chan
// Autre étudiant  : Sebastian Perez 

# REF : https://developer.okta.com/blog/2020/01/15/protecting-a-php-api-with-oauth
# REF : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
