"use strict";

const ExerciseGeo = require("../../models/exercises/exercise-geo");

module.exports = (req, res, next) => {
  const { question, solution } = req.body;
  const { url } = req.file;
  console.log(url);
  ExerciseGeo.create({
    question,
    imageOne: { url },
    solution
  })
    .then(exercise => {
      res.json({ exercise });
    })
    .catch(error => {
      next(error);
    });
};
