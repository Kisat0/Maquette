/* Création des quatres tables Messages */

    CREATE TABLE Messages(

    id_message int unsigned NOT NULL AUTO_INCREMENT,
    id_game int unsigned NOT NULL,
    id_player int unsigned,
    message TEXT(50),
    time_message timestamp NOT NULL DEFAULT current_timestamp(),
    PRIMARY KEY(id_message),
    CONSTRAINT FK_GameMessage FOREIGN KEY(id_game)
    REFERENCES Games(id_game),
    CONSTRAINT FK_UserMessage FOREIGN KEY(id_player)
    REFERENCES Users(id_player)

     );

    