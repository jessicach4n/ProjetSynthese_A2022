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
            
            if ($answer[0][count]) {
                $_SESSION["username"] = $username;
                return 1;
            }
            return 0;
        }

        public static function addAnimation($creator, $creationDate, $city, $country, $video) {
                $connection = Connection::getConnection();
                
                $statement = $connection->prepare("INSERT INTO Animations(createur, date_creation, ville, pays, video) 
                VALUES (?, ?, ?, ?, ?, ?, ?)");
                $statement->bindParam(1, $creator);
                $statement->bindParam(2, $creationDate);
                $statement->bindParam(3, $city);
                $statement->bindParam(4, $country);
                $statement->bindParam(5, $video);
                
                $answer = $statement->execute();
                
                return $answer;
        }
    }