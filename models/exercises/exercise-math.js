"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  answerOne: {
    type: String,
    required: true,
    trim: true
  },
  answerTwo: {
    type: String,
    required: true,
    trim: true
  },
  answerThree: {
    type: String,
    required: true,
    trim: true
  },
  answerFour: {
    type: String,
    required: true,
    trim: true
  },
  solution: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model("ExerciseMath", schema);
