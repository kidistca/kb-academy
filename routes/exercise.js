"use strict";

const { Router } = require("express");
const router = Router();
// const routeGuardMiddleware = require("./../middleware/route-guard");

// ---------------------------------- EXERCISE ----------------------------------
// ---------------------------------- EXERCISE ----------------------------------
// ---------------------------------- EXERCISE ----------------------------------

const createExerciseController = require("./../controllers/exercise/create-exercise");

router.post("/auth/create-exercise", createExerciseController);

module.exports = router;
