"use strict";

const ExerciseGeo = require("../../models/exercises/exercise-geo");

module.exports = (req, res, next) => {
  const { question, solution } = req.body;
  const answers = req.file.url;

  console.log("file url", req.file.url);
  const data = {
    question,
    answers
  };

  for (let id in req.files) {
    data[id] = req.files[id][0].url;
  }

  ExerciseGeo.create(data)
    .then(exercise => {
      res.json({ exercise });
    })
    .catch(error => {
      next(error);
    });
};
