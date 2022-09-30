<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $data["pageName"] ?></title>

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../images/favicon.png">
    <!-- Style sheets -->
    <link rel="stylesheet" href="css/global.css">
    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&family=Staatliches&display=swap" rel="stylesheet">
    

</head>

<header>
    <nav>
        <a href="shares.php">Partages</a>
        <a href="about.php">À propos</a>
        <a href="login.php">Connexion</a>
    </nav>
    <?php
        // if ($data["isLoggedIn"]) {
             ?>
                <!-- <p>Magix - The Card Game</p> -->
             <?php
        // }
        // else {
             ?>
             <!-- <p>The Card Game</p> -->
             <?php
        // }
    ?>
</header>