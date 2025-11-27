const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');


var schema = mongoose.Schema({ name: String })




schema.methods.motor = function () {
    console.log(this.name + " запустил мотор")
}




const Bus = mongoose.model('Bus', schema);






const busik = new Bus({ name: 'Vector Next' });
busik.save().then(() => busik.motor());