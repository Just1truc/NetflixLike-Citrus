const express = require("express");
const router = express.Router();
const queries = require("./movies.query");

router.get('/', (req, res) => {
    const jbv = req.query.jbv;
    console.log(jbv);
    if (jbv === undefined)
        queries.get_movies(req, res);
    else
        queries.get_movie(res, jbv);
});

router.get('/search', (req, res) => {
    const qr = req.query.qr;
    if (qr === undefined)
        res.sendStatus(400);
    else {
        queries.searching(res, qr);
    }
});

module.exports = router;