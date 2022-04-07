const express = require('express');
const router = express.Router();
const queries = require("./auth.query");

function any(array) {
    for (var key in array) {
        if (array[key] == undefined)
            return false;
    }
    return true;
}

router.post('/register', (req, res) => {
    const info = {
        email : req.body.email,
        password : req.body.password,
        name : req.body.name,
        firstname : req.body.firstname
    }
    console.log(info);
    if (any(info) == false)
        res.sendStatus(400);
    else
        queries.register(req, res, info);
});

router.post('/login', (req, res) => {
    const info = {
        email : req.body.email,
        password : req.body.password
    }
    if (any(info) == false)
        res.sendStatus(400);
    else
        queries.login(req, res, info);
});

module.exports = router;
