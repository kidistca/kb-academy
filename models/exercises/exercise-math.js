"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  question: {
    type: String,
    // required: true,
    lowercase: true,
    trim: true
  },
  valueOne: {
    type: Number,
    // required: true,
    trim: true
  },
  valueTwo: {
    type: Number,
    // required: true,
    trim: true
  },
  answer: {
    type: Number,
    // required: true,
    trim: true
  },
  answerFour: {
    type: String,
    // required: true,
    trim: true
  },
  solution: {
    type: Number,
    // required: true,
    trim: true
  }
});

const ExerciseMath = mongoose.model("ExerciseMath", schema);

module.exports = ExerciseMath;
