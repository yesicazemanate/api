import { Router } from "express";
import PlaceController from "../controllers/place.js";

const router = Router();

router.get("/", PlaceController.getPlaces);
router.get("/id/:id?", PlaceController.getPlace);
router.post("/save", PlaceController.savePlace);
router.put("/put/:id?", PlaceController.updatePlace);
router.delete("/delete/:id?", PlaceController.deletePlace);

export default router;
