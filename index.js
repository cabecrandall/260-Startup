const express = require('express');
const DB = require('./database.js');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.static('public'));

class user {
    constructor(username, password, profilePicture) {
        this.username = username;
        this.password = password;
        this.profilePicture = profilePicture;
        this.favorites = [];
        this.history = [];
    }
}

//Endpoints
app.post('/user', (req, res) => {
    const user = req.body;
    insertUser(user);
    res.send(user);
});

app.get('/user/:username', async (req, res) => {
    const user = await getUser(req.params.username);
    console.log("user obtained: " + user.username);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send("User not found");
    }
});

app.get('/user/:username/favorites', async (req, res) => {
    const user = await getUser(req.body.username);
    if (user) {
        res.send(JSON.stringify(user.favorites));
    } else {
        res.status(404).send("User not found");
    }
});

app.get('/user/:username/history', async (req, res) => {
    const user = await getUser(req.params.username);
    if (user) {
        res.send(JSON.stringify(user.history));
    } else {
        res.status(404).send("User not found");
    }
});

app.put('/user/:username', async (req, res) => {
    const user = await getUser(req.params.username);
    if (user) {
        user.profilePicture = req.body.profilePicture;
        res.send(user.profilePicture);
        updateUser(user);
    } else {
        res.status(404).send("User not found");
    }
});

app.put('/user/:username/favorites', async (req, res) => {
    console.log("user: " + user);
    const user = await getUser(req.params.username);
    if (user) {
        user.favorites.push(req.body);
        res.send(user.favorites);
        updateUser(user);
    } else {
        res.status(404).send("User not found");
    }
});

app.put('/user/:username/history', async (req, res) => {
    console.log("history: " + user);
    const user = await getUser(req.params.username);
    if (user) {
        user.history.push(req.body);
        res.send(user.history);
        updateUser(user);
    } else {
        res.status(404).send("User not found");
    }
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

console.log("Server running on port 8080");





// Make login wooorrrrkkk!!!!




async function getUser(username) {
    const user = await DB.getUser(username);
    return user;
}

async function updateUser(user) {
    await DB.updateUser(user);
}

async function insertUser(user) {
    await DB.insertUser(user);
}




//Get reviews so they stay forever!