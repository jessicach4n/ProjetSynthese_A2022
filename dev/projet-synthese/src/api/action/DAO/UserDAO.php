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

        public static function getEmailNumber($username) {
                $connection = Connection::getConnection();
                
                $statement = $connection->prepare("SELECT chiffre_email FROM usagers WHERE nom_utilisateur = ?");
                $statement->bindParam(1, $username);
                
                $statement->setFetchMode(PDO::FETCH_ASSOC);
                $statement->execute();
    
                $answer = $statement->fetchAll();
                
                return $answer[0]["chiffre_email"];
        }

        public static function addAnimation($creator, $creationDate, $city, $country, $video) {
                $connection = Connection::getConnection();
                $statement = $connection->prepare("INSERT INTO Animations(createur, date_creation, ville, pays, video) 
                VALUES ((SELECT id FROM usagers WHERE nom_utilisateur = ?), ?, ?, ?, ?)");
                $statement->bindParam(1, $creator);
                $statement->bindParam(2, $creationDate);
                $statement->bindParam(3, $city);
                $statement->bindParam(4, $country);
                $statement->bindParam(5, file_get_contents($video), PDO::PARAM_LOB);
                
                $answer = $statement->execute();
                
                return $answer;
        }

        public static function getAllAnimationIds() {
            $connection = Connection::getConnection();

            $statement = $connection->prepare("SELECT id FROM animations ORDER BY id DESC");

            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();

            $answers = $statement->fetchAll();
            $arr = [];
            foreach($answers as $answer) {
                array_push($arr, $answer["id"]);
            }

            return $arr;
        }

        public static function getAnimationInfo($id) {
            $connection = Connection::getConnection();

            $statement = $connection->prepare(" SELECT animations.id, usagers.nom_utilisateur, ville, pays, date_creation 
                                                FROM animations
                                                JOIN usagers
                                                ON usagers.id = animations.createur
                                                WHERE animations.id = ?;");
            $statement->bindParam(1, $id);
            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();

            $answer = $statement->fetchAll();
        
            return $answer;
        }

        public static function getVideo($id) {
            $connection = Connection::getConnection();

            $statement = $connection->prepare(" SELECT video FROM animations WHERE id = ?");
            $statement->bindParam(1, $id);

            $statement->setFetchMode(PDO::FETCH_ASSOC);
            $statement->execute();

            $answer = $statement->fetchAll();
        
            return $answer[0][video];
        }
    }