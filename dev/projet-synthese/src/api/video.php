<?php
    // Nom du fichier  : video.php
    // Description     : Fichier qui retourne le lien de la vidéo à partir du backend.
    // Auteur          : Jessica Chan
    // Autre étudiant  : Sebastian Perez

    require_once("action/VideoAction.php");
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: video/mp4");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    header('HTTP/1.1 200 OK');

    $action = new VideoAction();
    $data = $action->execute();

    fpassthru($data['response']);

?>
