const { range } = require("express/lib/request");
const db = require("./../../config/db_connexion");

function get_account(req, res) {
    db.query("SELECT * FROM `account` WHERE `id`=?", [req.id["id"]], (err, result, fields) => {
        if (err) res.sendStatus(400);
        else {
            result[0]["password"] = "*".repeat(result[0]["password"].length)
            res.status(200).send(result);
        }
    });
}

function getNumberOfUndefined(array) {
    let nbr = 0;
    for (var item in array) {
        if (array[item] != undefined)
            nbr++;
    }
    return nbr;
}

function getDefinedItem(obj) {
    for (var item in obj) {
        if (obj[item] != undefined)
            return item;
    }
    return undefined;
}

function checkPassword(password, commencer, res, req) {
    db.query("SELECT * FROM `account` WHERE (id=? AND password=?)", [req.id['id'], password], (err, result, fields) => {
        if (err) res.sendStatus(500);
        else {
            if (result.length === 0)
                res.sendStatus(400);
            else {
                db.query("UPDATE `account` SET " + getDefinedItem(commencer) + " = ? WHERE id = ?", [commencer[getDefinedItem(commencer)], req.id["id"]], (err, result, fields) => {
                    if (err) res.sendStatus(500);
                    else
                        res.sendStatus(200);
                });
            }
        }
    })
}

function update_account(req, res) {
    const email = req.query.email;
    const newpassword = req.query.password;
    const firstname = req.query.firstname;
    const name = req.query.name;
    const password = req.body.password;
    const commencer = {"email" : email, "firstname" : firstname, "password" : newpassword, "name" : name}
    if (getNumberOfUndefined(commencer) != 1)
        res.sendStatus(400);
    else {
        checkPassword(password, commencer, res, req);
    }
}

module.exports = { get_account, update_account };
