import { Router } from "express";
import CityController from "../controllers/city.js";

const router = Router();

router.get("/", CityController.getCitys);
router.get("/id/:id?", CityController.getCity);
router.post("/save", CityController.saveCity);
router.put("/put/:id?", CityController.updateCity);
router.delete("/delete/:id?", CityController.deleteCity);

export default router;