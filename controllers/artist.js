import Artist from "../models/artist.js";

const ArtistController = {
  getArtists: function (req, res) {
    Artist.find({}).exec()
      .then((artistsList) => {
        if (!artistsList)
         return res.status(404).send({ message: "No data found" })
        return res.status(200).json(artistsList);
      })
      .catch((err) => res.status(500).send({ message: `Error: ${err}` }));
  },
  getArtist: function (req, res) {
    let artistId = req.params.id;
    if (artistId == null)
      return res.status(404).send({ message: "Artist not fue encontrado" });

    Artist.findById(artistId).exec()
      .then((data) => {
        if (!data) return res.status(404).send({ message: "Artist not found" });
        return res.status(200).send(data);
      })
      .catch((err) =>
        res.status(500).send({ message: `Internal error-> ${err}` })
      );
  },
  saveArtist: function (req, res) {
    let artist = new Artist();
    const { name, photo} = req.body;
    if (name && photo) {
      artist.name = name;
      artist.photo = photo;
      
        artist.save()
        .then((storedArtist) => {
          storedArtist
            ? res.status(200).json({ artist: storedArtist })
            : res.status(404).send({ message: "Error saving the document" });
        })
      
        .catch((err) =>
          res.status(500).send({ message: "Error while saving the document" })
        );
    } else {
      return res.status(400).send({ message: "Data is not right" });
    }
  },
   updateArtist: function (req, res) {
    let {id} = req.params;
    let {name , department} = req.body;

    Artist.findByIdAndUpdate(id, name, department,{ returnDocument: "after" })
      .then((updatedArtist) => {
        if (!updatedArtist)
          return res
            .status(404)
            .send({ message: "The document does not exist" });
        return res.status(200).send({ artist : updatedArtist });
      })
      .catch((error) =>
        res.status(500).send({ message: `Error while updating ${error}` })
      );
  },
  deleteArtist: function (req, res) {
    let {id} = req.params;
    Artist.findByIdAndDelete(id)
      .then((removedArtist) => {
        if (!removedArtist)
          return res.status(404).send({ message: "The artist does not exist" });
        return res.status(200).send({ artist : removedArtist });
      })
      .catch((err) =>
        res.status(500).send({ message: "Error while deleting" })
      );
}
};

export default ArtistController





