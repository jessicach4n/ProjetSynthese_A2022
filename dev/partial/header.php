<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $data["pageName"] ?></title>

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="./images/favicon.png">
    <!-- Style sheets -->
    <link rel="stylesheet" href="css/global.css">
    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&family=Staatliches&display=swap" rel="stylesheet">

</head>

<header>
    <a href="home.php">
        <img src="./img/logo-white.svg" alt="Logo du site web" id="logo">
    </a>
    <nav class="header-menu">
        <a href="animation.php" class=<?= ($data["pageName"] == "Animation") ? $data["active"] : ''?>>Animation</a>
        <a href="shares.php" class=<?= ($data["pageName"] == "Shares") ? $data["active"] : ''?>>Partages</a>
        <a href="about.php" class=<?= ($data["pageName"] == "About") ? $data["active"] : ''?>>À propos</a>
    <?php 
        if ($data["isLoggedIn"]) {
            ?>
                <a href="profile.php" class=<?= ($data["pageName"] == "Profile") ? $data["active"] : ''?>>Profil</a>
                <a href="?logout=true"?>Déconnexion</a>
            <?php
        }
        else {
            ?>
                <a href="login.php" class=<?= ($data["pageName"] == "Login") ? $data["active"] : ''?>>Connexion</a>
            <?php
        }         
        
        ?>
    </nav>
</header>