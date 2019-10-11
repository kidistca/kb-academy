"use strict";

const MultipleChoice = require("../../models/exercises/multiple-choice");

module.exports = (req, res, next) => {
  MultipleChoice.find()
    .then(exercise => {
      res.json({ exercise });
    })
    .catch(error => {
      next(error);
    });
};
