<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <script src="js/jquery.touchSwipe.min.js"></script>
    <script src="js/jquery-3.3.1.min.js"></script>
    <title>Quentin Dherret | Contact</title>
</head>
<body>
    <?php include('header.php') ?>
    <div id="hamburger">
            <ul>
                <li><a href="index.php">accueil</a></li>
            </ul>
        </div>
    <main>
        <form method="POST" action="sendform.php">
            <div id="formTitle">formulaire de contact</div>
            <div id="contentForm">
                <label for="nom">NOM /</label>
                <input type="text" name="nom" id="nom">
                <label for="prenom">PRENOM /</label>
                <input type="text" name="prenom" id="prenom">
                <label for="email">EMAIL /</label>
                <input type="email" name="email" id="email">
                <label for="tel">TELEPHONE /</label>
                <input type="tel" name="tel" id="tel">
                <label for="objet">OBJET /</label>
                <input type="text" name="objet" id="objet">
                <label for="contenu">MESSAGE /</label>
                <textarea name="contenu" id="contenu" cols="30" rows="10"></textarea>
                <input type="submit" id="submit" value="envoyer">
            </div>
        </form>
    </main>
    <script src="js/index.js"></script>
</body>