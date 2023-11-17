const { MongoClient } = require('mongodb');

const cfg = require('./dbconfig.json');
const url = `mongodb+srv://${cfg.userName}:${cfg.password}@${cfg.hostname}`;


const client = new MongoClient(url);
const db = client.db('startup');
const users = client.db('startup').collection('users');

async function insertUser(user) {
    await users.insertOne({username: user.username, password: user.password, 
      profilePicture: user.profilePicture, favorites: user.favorites, history: user.history});
    console.log("user inserted");
}

async function getUser(username) {
  const user = await users.findOne({ username: username });
  console.log("user obtained: " + user.username);
  return user ? user : null;
}


async function updateUser(user) {
    await users.updateOne({username: user.username}, {$set: {profilePicture: user.profilePicture, 
      favorites: user.favorites, history: user.history}});
}


client
 .connect()
 .then(() => db.command({ ping: 1 }))
 .catch((ex) => {
   console.log(`Error with ${url} because ${ex.message}`);
   process.exit(1);
 });

 module.exports = {insertUser, getUser, updateUser};
