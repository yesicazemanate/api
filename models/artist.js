"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ArtistSchema = Schema({
  name: String,
  photo: String,
});
export default  mongoose.model( "Concert_Artist", ArtistSchema, "Concert_Artist");
