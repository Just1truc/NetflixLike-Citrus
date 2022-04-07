const db = require('./../../config/db_connexion');
const jwt = require('jsonwebtoken');

function insertUser(req, res)
{
    db.query(
        "INSERT INTO `account` (email, password, name, firstname) VALUES (?, ?, ?, ?)",
        [req.body.email, req.body.password, req.body.name, req.body.firstname],
        function(err, result, fields) {
        if (err) {
            res.status(400).send("Bad request");
        } else {
            db.query("SELECT MAX(id) FROM `account`", (err, result, fields) => {
                if (err) res.status(500).send("Database error");
                else {
                    const id = result[0];
                    const user = { id: id };
                    const accessToken = jwt.sign(user, process.env.SECRET, { expiresIn: '3600s' });
                    res.status(200).send({ "token" : accessToken });
                }
            });
        }
    });
}

function register(req, res, info) {
    const array = []
    for (var key in info) {
        array.push(info[key])
    }
    db.query(
    "SELECT * FROM account WHERE (email=? OR firstname=? OR name=?)", [req.body.email, req.body.firstname, req.body.name],
    function (err, result, fields) {
        if (err) {
            console.log(result);
            console.log(err);
            res.status(400).send("Bad Request");
        } else {
          console.log("ok pedale");
          if (result.length != 0)
            res.status(409).json({"msg" : "account already exists"});
          else
            insertUser(req, res)
        }
      }
    )
}

function login(req, res, info) {
    const array = []
    for (var key in info) {
        array.push(info[key])
    }

    db.query(
        "SELECT `id` FROM `account` WHERE `email`=? AND `password`=?", array, function (err, result, fields) {
            if (err) res.sendStatus(500);
            else {
                if (result.length == 0)
                    res.sendStatus(404);
                else {
                    const id = result[0];
                    const user = { id: id };
                    const accessToken = jwt.sign(user, process.env.SECRET, { expiresIn: '3600s' });
                    res.status(200).send({ "token" : accessToken });
                }
            }
        }
    )
}

module.exports = { register, login };
