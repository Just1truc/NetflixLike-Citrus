const db = require("./../../config/db_connexion");

function get_account(req, res) {
    db.query("SELECT * FROM `account` WHERE `id`=?", [req.id], (err, result, fields) => {
        if (err) res.sendStatus(400);
        else
            res.status(200).send(result);
    });
}

module.exports = { get_account };
