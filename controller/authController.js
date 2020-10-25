const authService = require('../services/authService');
const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    authService.login(req.body).then(result => {
        res.send(result)
    }).catch(error => {
        res.status(error.status).send(error)
    })
})
module.exports = router