const express = require("express");
const router = express.Router();
const queries = require('./user.query');

router.get("/", (req, res) => {
    queries.get_account(req, res);
});

router.post("/update", (req, res) => {
    queries.update_account(req, res);
});

module.exports = router;
