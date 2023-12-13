"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ConcertSchema = Schema({
  name: String,
  datetime: String,
  id_place:Object
});
export default  mongoose.model( "Concert", ConcertSchema, "Concert");