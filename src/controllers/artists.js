const { Artist } = require("../models");

exports.create = (req, res) => {
  Artist.create(req.body)
    .then(artist => res.status(201)
    .json(artist)
    );
};

exports.list = (req, res) => {
  Artist.findAll(req.body)
    .then(artists => res.status(200)
    .json(artists)
    );
};

exports.getArtistById = (req, res) => {
  Artist.findByPk(req.params.artistId)
    .then(artist => {
      if (!artist) {
        res.status(404).json({ error: "The artist could not be found." });
      } else {
        res.status(200).json(artist);
      };
  });
};

exports.updateArtist = (req, res) => {
  const { id } = req.params;
  Artist.update(req.body, { where: { id: req.params.artistId } }).then(([rowsUpdated]) => {
    if (!rowsUpdated) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      res.status(200).json(rowsUpdated);
    }
  });
};

exports.deleteArtist = (req, res) => {
  const { id } = req.params;
  Artist.destroy({ where: { id: req.params.artistId } })
    .then(artist => {
      if (!artist) {
        res.status(404).json({ error: "The artist could not be found." });
      } else {
        res.status(204).json(artist);
      };
  });
};