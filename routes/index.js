var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '<h1>Express</h1>' });
});
/* Страница 86*/
router.get('/86_bus', function (req, res, next) {
  res.send("<h1>83/86 (485-23) мкрн. Загородный - с. Чистенькое (с.Трёхпрудное)</h1>")
});
/* Страница 57*/
router.get('/57_bus', function (req, res, next) {
  res.send("<h1>57 (495-23) АШАН (ТЦ 'Южная Галерея') - с. Левадки</h1>")
});
/* Страница 91*/
router.get('/91_bus', function (req, res, next) {
  res.send("<h1>91 (558-23) ГРЭС - Ак Мечеть (п. Ешиль-Даг)</h1>")
});

module.exports = router;
