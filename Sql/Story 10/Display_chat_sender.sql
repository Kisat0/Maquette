    /* récupération des messages datant de moins de 24H et diffinire qui est expiditeur ou non  */

    SELECT Messages.message, Messages.id_message, Messages.time_message,
    CASE WHEN Users.id_player = 1 THEN TRUE ELSE FALSE END AS estExpediteur
    FROM Messages
    INNER JOIN Users On Users.id_player = Messages.id_player
    WHERE DATE_SUB(CURRENT_TIMESTAMP, INTERVAL 1 DAY);
    