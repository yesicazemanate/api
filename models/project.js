"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProjectSchema = Schema({
  name: String,
  description: String,
  category: String,
  year: Number,
  langs: [String],
});
module.exports = mongoose.model("Project", ProjectSchema);
