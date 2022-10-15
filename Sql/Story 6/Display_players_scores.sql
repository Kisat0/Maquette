    /* récupération des donner de l'utilisateur depuis la bases de doner Uses, Games et Scores */

    SELECT Games.game_name, Users.username, Scores.difficulty, Scores.score_game 
    FROM Scores 
    INNER JOIN Games ON Games.id_game = Scores.id_game
    INNER JOIN Users ON Scores.id_player = Users.id_player
    ORDER BY username, difficulty, score_game;
    