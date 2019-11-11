const mongoose = require('mongoose');

var laureateSchema = new mongoose.Schema({
    id: String,
    firstname: String,
    surname: String,
    motivation: String,
    share: Number
});

var prizeSchema = new mongoose.Schema({
    year: Number,
    category: String,
    overallMotivation: String,
    laureates: [laureateSchema]
})

module.exports = mongoose.model('prize', prizeSchema);