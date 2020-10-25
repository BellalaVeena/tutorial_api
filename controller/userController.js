const userService = require('../services/userService');
const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    userService.create(req.body).then((result) => {

        res.send(result)
    }).catch((error) => {

        res.status(error.status).send(error)

    });
});

module.exports = router;