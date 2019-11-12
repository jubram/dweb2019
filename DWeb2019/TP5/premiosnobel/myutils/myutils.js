const fs = require('fs');
var Prize = require('../models/prizes');

function setup_db() {
    let rawdata = fs.readFileSync('prize.json');
    console.log(rawdata);
    let prizes = JSON.parse(rawdata);

    prizes.forEach(element => {
        var novo = new Prize(element);
        novo.save();
    });
}

module.exports.setup_db = setup_db;