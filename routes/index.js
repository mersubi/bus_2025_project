var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '<h1>Express</h1>' });
});
/* Страница 86*/
router.get('/86_bus', function (req, res, next) {
  res.send("<h1>86 Чистенькое - Загородный</h1>")
});


module.exports = router;
