const express = require('express');
// const { Artist } = require('./models');
const artistControllers = require('./controllers/artists');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

app.post('/artists', artistControllers.create);

module.exports = app;