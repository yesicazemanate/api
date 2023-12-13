"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CitySchema = Schema({
  //_id: String,
  name: String,
  department: String,
});
export default  mongoose.model( "Concert_City", CitySchema, "Concert_City");