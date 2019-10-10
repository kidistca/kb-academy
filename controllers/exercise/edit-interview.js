"use strict";

const MultipleChoice = require("../../models/exercises/multiple-choice");

module.exports = (req, res, next) => {
  const id = req.params.id;
  const {
    question,
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    solution,
    description
  } = req.body;
  MultipleChoice.findOneAndUpdate(
    {
      _id: id
    },
    {
      ...(question && { question }),
      ...(optionOne && { optionOne }),
      ...(optionTwo && { optionTwo }),
      ...(optionThree && { optionThree }),
      ...(optionFour && { optionFour }),
      ...(solution && { solution }),
      ...(description && { description })
    },
    { new: true }
  )
    .then(exercise => {
      if (exercise) {
        res.json({ exercise });
      } else {
        next(new Error("EXERCISE_COULD_NOT_BE_EDITED"));
      }
    })
    .catch(error => {
      next(error);
    });
};
