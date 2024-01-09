let client = require('../dbConnection');

let collection = client.db().collection('Arsenals');

function postArsenal(invincible, callback) {
    collection.insertOne(invincible,callback);
}

function getAllArsenals(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postArsenal,getAllArsenals}