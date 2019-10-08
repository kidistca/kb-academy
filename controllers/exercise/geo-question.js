"use strict";

const ExerciseGeo = require("../../models/exercises/exercise-geo");

module.exports = (req, res, next) => {
  const { question, solution } = req.body;
  const imageOne = req.file.url;
  console.log(imageOne);
  ExerciseGeo.create({
    question,
    imageOne,
    solution
  })
    .then(exercise => {
      res.json({ exercise });
    })
    .catch(error => {
      next(error);
    });
};
