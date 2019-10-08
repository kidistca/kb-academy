"use strict";

const ExerciseGeo = require("../../models/exercises/exercise-geo");

module.exports = (req, res, next) => {
  const { question, solution } = req.body;
  const { imageOne, imageTwo, imageThree, imageFour } = ExerciseGeo.create({
    question,
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    solution
  })
    .then(exercise => {
      res.json({ exercise });
    })
    .catch(error => {
      next(error);
    });
};
