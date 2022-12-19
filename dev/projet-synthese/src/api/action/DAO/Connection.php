<?php
    // Nom du fichier  : Connection.php
    // Description     : Classe statique permettant d'effectuer une connection avec la base de données.
    // Auteur          : Sebastian Perez
    // Autre étudiant  : Jessica Chan

    require_once("action/constants.php");
        
    class Connection {
        private static $connection = null;
        
        public static function getConnection() {
            if (Connection::$connection == null) {
                Connection::$connection = new PDO(DB_HOST, DB_USER, DB_PASS);
                Connection::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                Connection::$connection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
            }

            return Connection::$connection;
        }
    }