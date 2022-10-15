/* Création des quatres tables Users, Scores, Games, Messages */

CREATE TABLE Users(

    id_player int unsigned NOT NULL AUTO_INCREMENT,
    mail VARCHAR (40),
    created_at timestamp NOT NULL DEFAULT current_timestamp(),
    mdp VARCHAR(40),
    username VARCHAR(40),
    last_connexion timestamp NOT NULL DEFAULT current_timestamp(),
    PRIMARY KEY(id_player)

    );
