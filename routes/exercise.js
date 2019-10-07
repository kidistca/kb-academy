"use strict";

const { Router } = require("express");
const router = Router();
const routeGuardMiddleware = require("./../middleware/route-guard");
const uploadImageMiddleware = require("./../middleware/picture-upload");

// ---------------------------------- EXERCISE ----------------------------------
// ---------------------------------- EXERCISE ----------------------------------
// ---------------------------------- EXERCISE ----------------------------------

const createExerciseController = require("./../controllers/exercise/create-exercise");
const interviewQuestionController = require("../controllers/exercise/interview-question");
const listInterviewQuestionController = require("../controllers/exercise/list-interview-question");
const listGeoQuestionController = require("../controllers/exercise/list-geo-question");
const createGeoController = require("../controllers/exercise/geo-question");
const uploadGeoController = require("./../controllers/exercise/upload-geo-pic");

router.post(
  "/exercise/create-exercise",
  routeGuardMiddleware(true),
  createExerciseController
);

router.post(
  "/exercise/create-interview-question",
  routeGuardMiddleware(true),
  interviewQuestionController
);

router.get(
  "/exercise/list-interview-question",
  routeGuardMiddleware(true),
  listInterviewQuestionController
);

router.post(
  "/exercise/create-geo",
  routeGuardMiddleware(true),
  createGeoController
);
router.get(
  "/exercise/list-geo-question",
  routeGuardMiddleware(true),
  listGeoQuestionController
);

// router.post(
//   "/exercise/upload",
//   routeGuardMiddleware(true),
//   uploadImageMiddleware.single("image"),
//   uploadGeoController
// );

module.exports = router;
