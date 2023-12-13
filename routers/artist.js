import { Router } from "express";
import ArtistController from "../controllers/artist.js";

const router = Router();

router.get("/", ArtistController.getArtists);
router.get("/id/:id?", ArtistController.getArtist);
router.post("/save", ArtistController.saveArtist);
router.put("/put/:id?", ArtistController.updateArtist);
 router.delete("/delete/:id?", ArtistController.deleteArtist);

export default router;
