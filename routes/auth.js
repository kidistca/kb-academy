"use strict";

const { Router } = require("express");
const router = Router();

const SignUpControllers = require("./../controllers/auth/signup");
const SignInControllers = require("./../controllers/auth/signin");
// const SignedInControllers = require("./../controllers/auth/signedin");
// const SignOutControllers = require("./../controllers/auth/signout");
// const EditControllers = require("./../controllers/auth/edit");
const routeGuardMiddleware = require("./../middleware/route-guard");

router.post("/auth/signup", routeGuardMiddleware(false), SignUpControllers);
router.post("/auth/signin", routeGuardMiddleware(false), SignInControllers);
// router.post("/auth/signout", routeGuardMiddleware(true), SignOutControllers);
// router.post("/auth/signedIn", SignedInControllers);

module.exports = router;
