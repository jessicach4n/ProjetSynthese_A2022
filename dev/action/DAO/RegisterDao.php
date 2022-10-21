<?php
    require_once("Connection.php");

    class RegisterDao {
        public static function setNewUSer($lastName, $firstname, $username, $passwd, $DoB, $email, $emailNumber) {
            $connection = Connection::getConnection();
            

            $statement = $connection->prepare("INSERT INTO Usagers(nom, prenom, nom_utilisateur, mot_de_passe, date_naissance, email, chiffre_email) 
            VALUES (?, ?, ?, ?, ?, ?, ?)");
            $statement->bindParam(1, $lastName);
            $statement->bindParam(2, $firstname);
            $statement->bindParam(3, $username);
            $statement->bindParam(4, $passwd);
            $statement->bindParam(5, $DoB);
            $statement->bindParam(6, $email);
            $statement->bindParam(7, $emailNumber);
            
            //$statement->setFetchMode(PDO::FETCH_ASSOC);
            $answer = $statement->execute();

            

            return $answer;
        }
    }