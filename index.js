const express = require('express');
const DB = require('./database.js');
const app = express();
const bcrypt = require('bcrypt');

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.static('public'));
app.set('trust proxy', true);

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
    if (!user.username || !user.password) {
        res.status(400).send("Username and password required");
        return;
    }
    else if (getUser(user.username).username) {
        res.status(409).send("User already exists");
        return;
    }
    insertUser(user);
    res.send(user);
});

app.get('/user/:username', async (req, res) => {
    const user = await getUser(req.params.username);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send("User not found");
    }
});

app.post('/auth/login', async (req, res) => {
    console.log("body: ", req.body);
    const username = req.body.username;
    console.log("username: " + username);
    const password = req.body.password;
    const user = await getUser(req.body.username);
    if (username) {
        console.log("passwords: " + req.body.password + "  " + user.password);
        if (bcrypt.compare(req.body.password, user.password)) {
            setAuthCookie(res, user.token);
            res.send({ id: user._id });
            return;
        }
    }
    res.status(401).send("Unauthorized");
});

app.get("/me", async (req, res, next) => {
    console.log("Starting authentication");
    try {
        authToken = req.cookies['token'];
        const user = await DB.getUserByToken(authToken);
        if (user) {
        res.send({ username: user.username });
        } else {
        res.status(401).send({ msg: 'Unauthorized' });
        }
}
catch {
    res.status(401).send({ msg: 'Unauthorized' });
}
  });

  //logout
  app.delete('/auth/logout', async (req, res) => {
    const user = await getUserByToken(req.cookies['token']);
    if (user) {
      user.token = null;
      updateUser(user);
      res.clearCookie('token');
      res.send({ msg: 'Logged out' });
      return;
    }
    res.status(401).send({ msg: 'Unauthorized' });
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
    const user = await getUser(req.body.username);
    if (user) {
        user.profilePicture = req.body.profilePicture;
        res.send(user.profilePicture);
        updateUser(user);
    } else {
        res.status(404).send("User not found");
    }
});

app.put('/user/:username/favorites', async (req, res) => {
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


// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie("token", authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }

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