"use strict";

const ExerciseMath = require("../../models/exercises/exercise-math");

module.exports = (req, res, next) => {
  const { question, valueOne, valueTwo, answer, solution } = req.body;
  ExerciseMath.create({
    question,
    valueOne,
    valueTwo,
    answer,
    solution
  })
    .then(exercise => {
      res.json({ exercise });
    })
    .catch(error => {
      next(error);
    });
};
