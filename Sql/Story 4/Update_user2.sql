    /* mise a jour du mot de passe de l'utilisateur grace a l'identification id et mdp*/

    UPDATE Users
    SET mail = 'noamail@gmail.com'
    WHERE id_player = 1 AND mdp = 'benyouyou';
