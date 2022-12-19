<?php
    // Nom du fichier  : navigation.php
    // Description     : Fichier dont le frontend peut appeler pour exécuter les actions liées.
    // Auteur          : Jessica Chan
    // Autre étudiant  : Sebastian Perez

    require_once("header.php");
    require_once("action/NavigationAction.php");
        
    $action = new NavigationAction();
    $data = $action->execute();

    $response = json_encode($data);

    header('HTTP/1.1 200 OK');
    echo($response);

?>
