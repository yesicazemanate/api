import City from "../models/city.js";

const CityController = {
  getCitys: function (req, res) {
    City.find({}).exec()
      .then((citysList) => {
        if (!citysList)
         return res.status(404).send({ message: "No data found" })
        return res.status(200).json(citysList);
      })
      .catch((err) => res.status(500).send({ message: `Error: ${err}` }));
  },
  getCity: function (req, res) {
    let cityId = req.params.id;
    if (cityId == null)
      return res.status(404).send({ message: "City not fue encontrado" });

      City.findById(cityId).exec()
      .then((data) => {
        if (!data) return res.status(404).send({ message: "City not found" });
        return res.status(200).json(data);
      })
      .catch((err) =>
        res.status(500).send({ message: `Internal error-> ${err}` })
      );
  },
  saveCity: function (req, res) {
    let city = new City();
    const { name, department} = req.body;
    if (name && department) {
        city.name = name;
        city.department = department;
      
        city .save()
        .then((storedCity) => {
          storedCity
            ? res.status(200).json({ city: storedCity })
            : res.status(404).send({ message: "Error saving the document" });
        })
      
        .catch((err) =>
          res.status(500).send({ message: "Error while saving the document" })
        );
    } else {
      return res.status(400).send({ message: "Data is not right" });
    }
  },
  updateCity: function (req, res) {
    let {id} = req.params;
    let {name , department} = req.body;

    Artist.findByIdAndUpdate(id, name, department,{ returnDocument: "after" })
      .then((updatedCity) => {
        if (!updatedCity)
          return res
            .status(404)
            .send({ message: "The document does not exist" });
        return res.status(200).send({ artist : updatedCity });
      })
      .catch((error) =>
        res.status(500).send({ message: `Error while updating ${error}` })
      );
  },
  deleteCity: function (req, res) {
    let {id} = req.params;
    City.findByIdAndDelete(id)
      .then((removedCity) => {
        if (!removedCity)
          return res.status(404).send({ message: "The city does not exist" });
        return res.status(200).send({ artist : removedCity });
      })
      .catch((err) =>
        res.status(500).send({ message: "Error while deleting" })
      );
}
};

export default CityController





