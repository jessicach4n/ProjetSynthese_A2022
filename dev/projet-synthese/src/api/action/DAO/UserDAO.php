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

        public static function addAnimation($createur, $date_creation, $ville, $pays, $video) {
                $connection = Connection::getConnection();
                
                $statement = $connection->prepare("INSERT INTO Animations(createur, date_creation, ville, pays, video) 
                VALUES (?, ?, ?, ?, ?, ?, ?)");
                $statement->bindParam(1, $createur);
                $statement->bindParam(2, $date_creation);
                $statement->bindParam(3, $ville);
                $statement->bindParam(4, $pays);
                $statement->bindParam(5, $video);
                
                $answer = $statement->execute();
                
                return $answer;
        }
    }