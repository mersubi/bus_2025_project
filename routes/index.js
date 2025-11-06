var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mercedes-Benz buses' });
});
/* Страница Mercedes-Benz CapaCity*/
router.get('/CapaCity', function (req, res, next) {
  res.render('bus', {
    title: "Mercedes-Benz CapaCity",
    picture: "images/mercedes-benz_capacity.jpg",
    desc: "Mercedes-Benz O530 GL является одним из самых крупногабаритных автобусов особо большой вместимости из семейства Citaro. Выпускается в странах европейского союза. Длина модели Capacity превышает длину модели O530G на один метр, из-за чего его назвали Capacity. Автобус сделан из нержавеющей стали.У автобуса полностью округлены углы и передняя часть. Лобовое стекло водителя триплекс сделано из пластика. Как и у других автобусов, стеклоочистители горизонтальные. Впереди установлено 6 фар, из которых две верхние, две основные и две противотуманные. Автобусу присущи тормозные, антиблокировочные и антипробуксовочные системы. В случае, если двери открыты, ход блокируется."
  });
});
/* Страница Mercedes-Benz Citaro*/
router.get('/citaro', function (req, res, next) {
  res.render('bus', {
    title: "Mercedes-Benz Citaro",
    picture: "images/mercedes-benz_citaro.jpg",
    desc: "Citaro — семейство городских и пригородных автобусов Mercedes-Benz. Городские модели низкопольные, с высотой пола над дорогой 320—340 мм, одинаковой по всему салону, за счёт смещения моторного отсека с вертикальным двигателем в левый угол задней площадки, а также применения портального заднего моста. Автобус занял первое место в конкурсе Bussworld awards 2019 в номинации самый лучший автобус 2019 года"
  });
});
/* Страница Mercedes-Benz Tourismo*/
router.get('/tourismo', function (req, res, next) {
  res.render('bus', {
    title: "Mercedes-Benz Tourismo",
    picture: "images/mersedes-benz_tourismo.jpg",
    desc: " Mercedes-Benz Tourismo — серия междугородных и туристических автобусов повышенной комфортности фирмы Mercedes-Benz. Модели O 350 RHD и SHD различаются высотой кузова и вместимостью багажного отделения.По данным 2005 года Tourismo — самый продаваемый автобус в Европе. За 10 лет турецкое отделение Mercedes-Benz Türk в г. Хошдере выпустило 10000 таких машин. В Европе Tourismo — один из наиболее распространенных туристических автобусов. На дорогах можно встретить более 12 000 автобусов этого семейства."
  });
});

module.exports = router;
