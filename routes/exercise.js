"use strict";

const { Router } = require("express");
const router = Router();

//const routeGuardMiddleware = require("./../middleware/route-guard");

const createExerciseController = require("./../controllers/exercise/create-exercise");

router.post("/auth/create-exercise", createExerciseController);

module.exports = router;
