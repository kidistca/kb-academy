"use strict";

const ExerciseMath = require("../../models/exercises/exercise-math");

module.exports = (req, res, next) => {
  const { question, answerOne, answerTwo, solution } = req.body;
  ExerciseMath.create({
    question,
    answerOne,
    answerTwo,
    solution
  })
    .then(exercise => {
      res.json({ exercise });
    })
    .catch(error => {
      next(error);
    });
};
