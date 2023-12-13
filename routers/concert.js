import { Router } from "express";
import ConcertController from "../controllers/concert.js";

const router = Router();

router.get("/", ConcertController.getConcerts);
router.get("/id/:id?", ConcertController.getConcert);
router.post("/save", ConcertController.saveConcert);
router.put("/put/:id?", ConcertController.updateConcert);
router.delete("/delete/:id?", ConcertController.deleteConcert);

export default router;
