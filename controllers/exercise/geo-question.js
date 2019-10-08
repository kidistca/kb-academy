"use strict";

const ExerciseGeo = require("../../models/exercises/exercise-geo");

module.exports = (req, res, next) => {
  const { question, solution } = req.body;
  // const imageOne = req.files;

  // const data = {
  //   question,
  //   answers
  // };
  console.log("file url", req.files["image-1"][0]["url"]);

  const file1 = req.files["image-1"][0]["url"];
  const file2 = req.files["image-2"][0]["url"];
  const file3 = req.files["image-3"][0]["url"];
  const file4 = req.files["image-4"][0]["url"];

  // for (let id in req.files) {
  //   data[id] = req.files[id][0].url;
  // }

  ExerciseGeo.create({
    question,
    imageOne: file1,
    imageTwo: file2,
    imageThree: file3,
    imageFour: file4,
    solution

    // $push: {
    //   answers: { $each: [{ file1 }, { file2 }] }
    // }
  })
    .then(exercise => {
      res.json({ exercise });
    })
    .catch(error => {
      next(error);
    });
};
