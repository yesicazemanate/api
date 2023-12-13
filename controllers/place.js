import Place from "../models/place.js";

const PlaceController = {
  getPlaces: function (req, res) {
    Place.find({}).exec()
      .then((placesList) => {
        if (!placesList)
         return res.status(404).send({ message: "No data found" })
        return res.status(200).json(placesList);
      })
      .catch((err) => res.status(500).send({ message: `Error: ${err}` }));
  },
  getPlace: function (req, res) {
    let placeId = req.params.id;
    if (placeId == null)
      return res.status(404).send({ message: "Place not fue encontrado" });

    Place.findById(placeId).exec()
      .then((data) => {
        if (!data) return res.status(404).send({ message: "Place not found" });
        return res.status(200).json(data);
      })
      .catch((err) =>
        res.status(500).send({ message: `Internal error-> ${err}` })
      );
  },
  savePlace: function (req, res) {
    let place = new Place();
    const { name, address,id_city} = req.body;
    if (name && address) {
        place.name = name;
        place.address = address;
        place.id_city = id_city;
        place.save()
        .then((storedPlace) => {
          storedPlace
            ? res.status(200).json({ place: storedPlace })
            : res.status(404).send({ message: "Error saving the document" });
        })
      
        .catch((err) =>
          res.status(500).send({ message: "Error while saving the document" })
        );
    } else {
      return res.status(400).send({ message: "Data is not right" });
    }
  },
   updatePlace: function (req, res) {
    let {id} = req.params;
    let {name , address, id_city} = req.body;

    Place.findByIdAndUpdate(id, name, address, id_city,{ returnDocument: "after" })
      .then((updatedPlace) => {
        if (!updatedPlace)
          return res
            .status(404)
            .send({ message: "The document does not exist" });
        return res.status(200).send({ place : updatedPlace });
      })
      .catch((error) =>
        res.status(500).send({ message: `Error while updating ${error}` })
      );
  },
  deletePlace: function (req, res) {
    let {id} = req.params;
    Place.findByIdAndDelete(id)
      .then((removedPlace) => {
        if (!removedPlace)
          return res.status(404).send({ message: "The place does not exist" });
        return res.status(200).send({ place : removedPlace });
      })
      .catch((err) =>
        res.status(500).send({ message: "Error while deleting" })
      );
}
};

export default PlaceController





