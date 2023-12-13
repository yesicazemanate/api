import Concert from "../models/concert.js";

const ConcertController = {
  getConcerts: function (req, res) {
    Concert.find({}).exec()
      .then((concertsList) => {
        if (!concertsList)
         return res.status(404).send({ message: "No data found" })
        return res.status(200).json(concertsList);
      })
      .catch((err) => res.status(500).send({ message: `Error: ${err}` }));
  },
  getConcert: function (req, res) {
    let concertId = req.params.id;
    if (concertId == null)
      return res.status(404).send({ message: "Concert not found" });

    Concert.findById(concertId).exec()
      .then((data) => {
        if (!data) return res.status(404).send({ message: "Concert not found" });
        return res.status(200).json(data);
      })
      .catch((err) =>
        res.status(500).send({ message: `Internal error-> ${err}` })
      );
  },
  saveConcert: function (req, res) {
    let concert = new Concert();
    const { name, datetime,id_place} = req.body;
    if (name && datetime) {
        concert.name = name;
        concert.datetime = datetime;
        concert.id_place = id_place;
        concert.save()
        .then((storedConcert) => {
          storedConcert
            ? res.status(200).json({ concert: storedConcert })
            : res.status(404).send({ message: "Error saving the document" });
        })
      
        .catch((err) =>
          res.status(500).send({ message: "Error while saving the document" })
        );
    } else {
      return res.status(400).send({ message: "Data is not right" });
    }
  },
   updateConcert: function (req, res) {
    let {id} = req.params;
    let {name , datetime, id_place} = req.body;

    Place.findByIdAndUpdate(id, name, datetime, id_place,{ returnDocument: "after" })
      .then((updatedConcert) => {
        if (!updatedConcert)
          return res
            .status(404)
            .send({ message: "The document does not exist" });
        return res.status(200).send({ concert : updatedConcert });
      })
      .catch((error) =>
        res.status(500).send({ message: `Error while updating ${error}` })
      );
  },
  deleteConcert: function (req, res) {
    let {id} = req.params;
    Concert.findByIdAndDelete(id)
      .then((removedConcert) => {
        if (!removedConcert)
          return res.status(404).send({ message: "The place does not exist" });
        return res.status(200).send({ concert : removedConcert });
      })
      .catch((err) =>
        res.status(500).send({ message: "Error while deleting" })
      );
}
};

export default ConcertController


