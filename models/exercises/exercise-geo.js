"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  question: {
    type: String,
    trim: true
  },
  // answers: [
  //   {
  //     key: {
  //       type: String
  //     },
  //     url: {
  //       type: String
  //     }
  //   }
  // // ],

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
