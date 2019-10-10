"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  question: {
    type: String,
    // required: true,

    trim: true
  },
  optionOne: {
    type: String,
    // required: true,
    trim: true
  },
  optionTwo: {
    type: String,
    // required: true,
    trim: true
  },
  optionThree: {
    type: String,
    // required: true,
    trim: true
  },
  optionFour: {
    type: String,
    // required: true,
    trim: true
  },
  solution: {
    type: String,
    // required: true,
    trim: true
  },
  description: {
    type: String,
    // required: true,
    trim: true
  }
});

const MultipleChoice = mongoose.model("MultipleChoice", schema);

module.exports = MultipleChoice;
