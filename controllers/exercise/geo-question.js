"use strict";

const ExerciseGeo = require("../../models/exercises/exercise-geo");

module.exports = (req, res, next) => {
  const {
    question,
    solution
  } = req.body;

  ExerciseGeo.create({
    question,
    imageOne : req.file.url,
    imageTwo :req.file.url,
    imageThree :req.file.url,
    imageFour :req.file.url,
    solution
  })
    .then(exercise => {
      res.json({ exercise });
    })
    .catch(error => {
      next(error);
    });
};
