import { Router } from "express";
import ArtistController from "../controllers/artist.js";

const router = Router();

router.get("/", ArtistController.getArtists);
router.get("/:id?", ArtistController.getArtist);
// router.post("/save-artist", ArtistController.saveArtist);
// router.put("/edit-artist/:id?", ArtistController.updateArtist);
 router.delete("/delete-artist/:id?", ArtistController.deleteArtist);

export default router;
