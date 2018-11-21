<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Quentin Dherret | Contact</title>
</head>
<body>
    <p>
        
    <?php
    
    $nom= $_POST['nom'];
    $prenom= $_POST['prenom'];
    $email= $_POST['email'];
    $tel=$_POST['tel'];
    $objet=$_POST['objet'];
    $message= $_POST['message'];
    
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .='From: '.$email." ". "\r\n".
                'Content-Type: text/plain; charset="utf-8"'."\r\n".
                'Content-Transfer-Encoding: 8bit';
    $mailtxt= "
            Formulaire de contact:
            
            Nom: ".$nom."
            Prenom: ".$prenom."
            Email: ".$email."
            Téléphone: ".$tel."
            Objet du message: ".$objet."
            Message: ".$message."
              ";
    $retour=mail('dcl.quentind@18pixel.fr', "Demande de contact", $mailtxt , $headers);
    if($retour)
        echo 'Votre formulaire de contact a bien été envoyé';
    else 
        echo "Erreur lors de l'envoi du formulaire, veuillez réessayer.";
    ?>
    </p>
</body>
</html>