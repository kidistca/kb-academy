"use strict";

const { Router } = require("express");
const router = Router();
const routeGuardMiddleware = require("./../middleware/route-guard");

// ---------------------------------- EXERCISE ----------------------------------
// ---------------------------------- EXERCISE ----------------------------------
// ---------------------------------- EXERCISE ----------------------------------

const createExerciseController = require("./../controllers/exercise/create-exercise");
const interviewQuestionController = require("../controllers/exercise/interview-question");
const listInterviewQuestionController = require("../controllers/exercise/list-interview-question");

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

module.exports = router;
