var express = require('express');
var router = express.Router();
var Bus = require('../models/bus').Bus;
var checkAuth = require("../middlewares/checkAuth.js");

/* Страница котов */
router.get("/:nick", checkAuth, async function (req, res, next) {
    var buses = await Bus.find({ nick: req.params.nick });
    console.log(buses)
    if (!buses.length) return next(new Error("Нет такого автобуса, выпущенного Mercedes-Benz"))
    var bus = buses[0];
    res.render('bus', {
        title: bus.title,
        picture: bus.avatar,
        desc: bus.desc
    })
});


module.exports = router;
