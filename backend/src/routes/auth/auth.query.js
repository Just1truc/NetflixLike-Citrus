const db = require('./../../config/db_connexion');

function insertUser(array, res)
{
    db.query(
        "INSERT INTO `user` (email, password, name, firstname) VALUES (?, ?, ?, ?)",
        [array],
        function(err, result, fields) {
        if (err) {
            res.status(400).send("Bad request");
        } else {
            db.query("SELECT MAX(id) FROM `user`", (err, result, fields) => {
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
    "SELECT `id` FROM `user` WHERE `email`=? OR `firstname`=? OR `name`=?", [info.email, info.firstname, info.name],
    function (err, result, fields) {
        if (err) {
          res.status(400).send("Bad Request");
        } else {
          check = result;
          console.log(result);
          if (result.length != 0)
            res.status(409).json({"msg" : "account already exists"});
          else
            insertUser(array, res)
        }
      }
    )
}

module.exports = { register };
