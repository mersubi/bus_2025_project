const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

var Bus = require('./models/bus.js').Bus

var bus = new Bus({
    title: "Mercedes-Benz Citaro",
    nick: "Citaro"
})

bus.save();
