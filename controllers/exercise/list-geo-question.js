"use strict";

const ExerciseGeo = require("../../models/exercises/exercise-geo");

module.exports = (req, res, next) => {
  ExerciseGeo.find()
    .then(exercise => {
      res.json({ exercise });
    })
    .catch(error => {
      next(error);
    });
};
