"use strict";

const { Router } = require("express");
const router = Router();
const routeGuardMiddleware = require("./../middleware/route-guard");

// ---------------------------------- EXERCISE ----------------------------------
// ---------------------------------- EXERCISE ----------------------------------
// ---------------------------------- EXERCISE ----------------------------------

const createExerciseController = require("./../controllers/exercise/create-exercise");
const multipleChoiceController = require("./../controllers/exercise/multiple-choice");

router.post(
  "/exercise/create-exercise",
  routeGuardMiddleware(true),
  createExerciseController
);

router.post(
  "/exercise/multiple-choice",
  routeGuardMiddleware(true),
  multipleChoiceController
);
module.exports = router;
