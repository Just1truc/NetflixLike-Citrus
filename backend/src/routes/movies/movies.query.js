const db = require('../../config/db_connexion');

function get_movies(req, res) {
    db.query("SELECT * FROM `movies`", (err, result, fields) => {
        if (err) res.sendStatus(500);
        else {
            res.status(200).send(result);
        }
    });
}

function get_movie(res, jbv) {
    db.query("SELECT * FROM `movies` WHERE `show_id`=?", [jbv], (err, result, fields) => {
        if (err) res.sendStatus(500);
        else {
            console.log(result);
            res.status(200).send(result);
        }
    });
}

module.exports = { get_movies, get_movie };