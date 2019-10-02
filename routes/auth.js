"use strict";

const { Router } = require("express");
const router = Router();
const routeGuardMiddleware = require("./../middleware/route-guard");

const SignUpControllers = require("./../controllers/auth/signup");
const SignInControllers = require("./../controllers/auth/signin");
const SignedInControllers = require("./../controllers/auth/signedin");
// const SignOutControllers = require("./../controllers/auth/signout");
// const EditControllers = require("./../controllers/auth/edit");

router.post("/auth/signup", routeGuardMiddleware(false), SignUpControllers);
router.post("/auth/signin", routeGuardMiddleware(false), SignInControllers);
router.get("/auth/signedin", SignedInControllers);
// router.post("/auth/signout", routeGuardMiddleware(true), SignOutControllers);

module.exports = router;
