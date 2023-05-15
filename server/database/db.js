const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Dmcp2003:codeshare1234@codeshare.ck3qnh5.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const database = client.db('Test');
const codes = database.collection('Codes');
const users = database.collection('Users');

module.exports = {
  codes,
  users,
};