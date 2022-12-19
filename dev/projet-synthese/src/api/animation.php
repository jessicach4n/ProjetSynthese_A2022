<?php
    // Nom du fichier  : animation.php
    // Description     : Fichier dont le frontend peut appeler pour exécuter les actions liées.
    // Auteur          : Jessica Chan
    // Autre étudiant  : Sebastian Perez

    require_once("header.php");
    require_once("action/AnimationAction.php");
        
    $action = new AnimationAction();
    $data = $action->execute();

    $response = json_encode($data);

    header('HTTP/1.1 200 OK');
    echo($response);

?>
