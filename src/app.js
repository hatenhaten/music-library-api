const express = require('express');
const artistControllers = require('./controllers/artists');
const artist = require('./models/artist');
const albumControllers = require('./controllers/albums');
const album = require('./models/album');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.get('/artists', artistControllers.list);
app.get('/artists/:artistId', artistControllers.getArtistById);
app.post('/artists', artistControllers.create);
app.patch('/artists/:artistId', artistControllers.updateArtist);
app.delete('/artists/:artistId', artistControllers.deleteArtist);

app.get('/albums', albumControllers.list);
app.get('/albums/:albumId', albumControllers.getAlbumById);
// app.get('/artists/:artistId/albums', albumControllers.getAlbumByArtistId);
app.post('/artists/:artistId/albums', albumControllers.create);
// app.patch('/albums/:artistId/', albumControllers.updateAlbum);
// app.delete('/albums/:albumId', albumControllers.deleteAlbum);

module.exports = app;