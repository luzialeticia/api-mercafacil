const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        title: "Teste Técnico Mercafacil",
        version: 1.0
    });
});

module.exports = router;