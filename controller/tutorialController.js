const tutorialService = require('../services/tutorialService');
const isAuthenticate = require('../services/tokenService');
const express = require('express');
const router = express.Router();


router.post("/", isAuthenticate, (req, res) => {

    tutorialService.create({ ...req.body, author: req.user._id }).then((result) => {
        res.send(result)

    }).catch((error) => {

        res.status(error.status).send(error)

    });
});

router.get("/:id", (req, res) => {

    tutorialService.getById(req.params.id).then((result) => {
        res.send(result)

    }).catch((error) => {

        res.status(error.status).send(error)

    });
});

router.get("/", (req, res) => {
    let page = req.query.page;
    let size = req.query.size;

    tutorialService.getAll(page, size).then((result) => {
        res.send(result)

    }).catch((error) => {

        res.status(error.status).send(error)

    });
});
router.put("/:id", isAuthenticate, (req, res) => {

    tutorialService.updateById(req.params.id, req.body).then((result) => {
        res.send(result)

    }).catch((error) => {

        res.status(error.status).send(error)

    });
});
router.delete("/:id", isAuthenticate, (req, res) => {

    tutorialService.deleteById(req.params.id).then((result) => {
        res.send(result)

    }).catch((error) => {

        res.status(error.status).send(error)

    });
});
router.delete("/", isAuthenticate, (req, res) => {

    tutorialService.deleteAll().then((result) => {
        res.send(result)

    }).catch((error) => {

        res.status(error.status).send(error)

    });
});

module.exports = router;