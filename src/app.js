const express = require('express');
const artistControllers = require('./controllers/artists');
const artist = require('./models/artist');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.get('/artists', artistControllers.list);

app.post('/artists', artistControllers.create);

module.exports = app;