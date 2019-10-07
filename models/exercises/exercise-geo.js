"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  question: {
    type: String,
    lowercase: true,
    trim: true
  },
  imageOne: {
    type: String
  },
  imageTwo: {
    type: String
  },
  imageThree: {
    type: String
  },
  imageFour: {
    type: String
  },
  solution: {
    type: String,
    trim: true
  }
});

const ExerciseGeo = mongoose.model("ExerciseGeo", schema);

module.exports = ExerciseGeo;
