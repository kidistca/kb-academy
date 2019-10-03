"use strict";

const Exercise = require("./../../models/exercises/exercise-math");

module.exports = (req, res, next) => {
  const {
    question,
    answerOne,
    answerTwo,
    answerThree,
    answerFour,
    solution
  } = req.body;
  Exercise.create({
    question,
    answerOne,
    answerTwo,
    answerThree,
    answerFour,
    solution
  })
    .then(exercise => {
      res.json(exercise);
    })
    .catch(error => {
      next(error);
    });
};
