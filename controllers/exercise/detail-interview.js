"use strict";

const MultipleChoice = require("../../models/exercises/multiple-choice");

module.exports = (req, res, next) => {
  // const id = req.params.id;
  MultipleChoice.findById({
    _id: req.params.id
  })
    .then(exercise => {
      console.log("EXCERCISE DETAIL", exercise);
      res.json({ exercise });
    })
    .catch(error => {
      next("ERROR", error);
    });
};
