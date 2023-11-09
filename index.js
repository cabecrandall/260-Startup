const express = require('express');
const app = express();

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
    users.push(user);
    res.send(user);
    console.log(users);
});

app.get('/user/:username', (req, res) => {
    const user = getUser(req.params.username);
    if (user) {
        res.send(JSON.stringify(user));
    } else {
        res.status(404).send("User not found");
    }
});

app.get('/user/:username/favorites', (req, res) => {
    const user = getUser(req.body.username);
    if (user) {
        res.send(JSON.stringify(user.favorites));
    } else {
        res.status(404).send("User not found");
    }
});

app.get('/user/:username/history', (req, res) => {
    const user = getUser(req.params.username);
    if (user) {
        res.send(JSON.stringify(user.history));
    } else {
        res.status(404).send("User not found");
    }
});

app.put('/user/:username', (req, res) => {
    const user = getUser(req.params.username);
    if (user) {
        user.profilePicture = req.body.profilePicture;
        res.send(user.profilePicture);
        updateUser(user);
    } else {
        res.status(404).send("User not found");
    }
});

app.put('/user/:username/favorites', (req, res) => {
    console.log("user: " + user);
    const user = getUser(req.params.username);
    if (user) {
        user.favorites.push(req.body);
        res.send(user.favorites);
        updateUser(user);
    } else {
        res.status(404).send("User not found");
    }
});

app.put('/user/:username/history', (req, res) => {
    console.log("history: " + user);
    const user = getUser(req.params.username);
    if (user) {
        user.history.push(req.body);
        res.send(user.history);
        updateUser(user);
    } else {
        res.status(404).send("User not found");
    }
});





// Make login wooorrrrkkk!!!!


const users = [];

function getUser(username) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            return users[i];
        }
    }
    return null;
}

function updateUser(user) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == user.username) {
            users[i] = user;
        }
    }
}

app.listen(8080);

console.log("Server running on port 8080");


//Get reviews so they stay forever!