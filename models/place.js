"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PlaceSchema = Schema({
    name: String,
    address: String,
    id_city: Object
});
export default  mongoose.model( "Place", PlaceSchema, "Place");