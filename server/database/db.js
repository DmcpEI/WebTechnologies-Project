const { MongoClient } = require('mongodb');

//Database URI

const client = new MongoClient(uri);

const database = client.db('Test');
const codes = database.collection('Codes');
const users = database.collection('Users');

module.exports = {
  codes,
  users,
};
