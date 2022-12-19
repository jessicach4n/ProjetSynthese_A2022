<?php
    // Nom du fichier  : login.php
    // Description     : Fichier dont le frontend peut appeler pour exécuter les actions liées.
    // Auteur          : Jessica Chan
    // Autre étudiant  : Sebastian Perez

    require_once("action/LoginAction.php");
    require_once("header.php");
        
    $action = new LoginAction();
    $data = $action->execute();

    $response = json_encode($data);

    header('HTTP/1.1 200 OK');
    echo($response);

?>
