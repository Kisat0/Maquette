/* Création des quatres tables Scores*/

    CREATE TABLE Scores(

    id_score int
    unsigned NOT NULL AUTO_INCREMENT,
    id_player int unsigned,
    id_game int unsigned NOT NULL,
    difficulty VARCHAR(40),
    score_game int unsigned,
    Time_game timestamp NOT NULL DEFAULT current_timestamp(),
    PRIMARY KEY(id_score),
    CONSTRAINT FK_UsersScores FOREIGN KEY(id_player)
    REFERENCES Users(id_player),
    CONSTRAINT FK_GamesScores FOREIGN KEY(id_game)
    REFERENCES Games(id_game)

    );
