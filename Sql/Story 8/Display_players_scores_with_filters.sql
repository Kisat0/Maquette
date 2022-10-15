    /* récupération des donner de l'utilisateur depuis la bases de doner Uses, Games et Scores */

    UPDATE Scores
    INNER JOIN Games ON Scores.id_game = Games.id_game
    SET Scores.score_game = 50
    WHERE score_game IS NOT NULL AND Games.game_name = 'The Power Of Memory' AND difficulty = 'hard' AND id_player = 3 OR  score_game IS NULL AND id_player =3 OR ;
