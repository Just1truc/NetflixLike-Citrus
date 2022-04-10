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

module.exports = router;