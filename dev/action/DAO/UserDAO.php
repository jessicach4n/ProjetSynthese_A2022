<?php
    require_once("Connection.php");

    class UserDAO {
        public static function authenticate($username, $passwd) {
            $connection = Connection::getConnection();

            $statement = $connection->prepare("SELECT COUNT(*) FROM usagers WHERE nom_utilisateur = ? and mot_de_passe = ?");
            $statement->bindParam(1, $username);
            $statement->bindParam(2, $passwd);
            
            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();

            $answer = $statement->fetchAll();

            return $answer;
        }
    }