const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');


const Bus = mongoose.model('Bus', { name: String });


const busik = new Bus({ name: 'Capa' });
busik.save().then(() => console.log('brbrbrbr'));
