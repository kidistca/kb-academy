"use strict";

const MultipleChoice = require("../../models/exercises/multiple-choice");

module.exports = (req, res, next) => {
  const {
    question,
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    solution,
    description
  } = req.body;
  MultipleChoice.create({
    question,
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    solution,
    description
  })
    .then(exercise => {
      res.json({ exercise });
    })
    .catch(error => {
      next(error);
    });
};
