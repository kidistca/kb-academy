"use strict";

const { Router } = require("express");
const router = Router();
const uploadImageMiddleware = require("./../middleware/picture-upload");
const routeGuardMiddleware = require("./../middleware/route-guard");

const SignUpController = require("./../controllers/auth/signup");
const SignInController = require("./../controllers/auth/signin");
const SignedInController = require("./../controllers/auth/signedin");
const SignOutController = require("./../controllers/auth/signout");
const uploadController = require("./../controllers/auth/uploadprofilepic");
// const EditControllers = require("./../controllers/auth/edit");

router.post("/auth/signup", routeGuardMiddleware(false), SignUpController);
router.post("/auth/signin", routeGuardMiddleware(false), SignInController);
router.get("/auth/signedin", SignedInController);
router.post("/auth/signout", routeGuardMiddleware(true), SignOutController);
router.post(
  "/upload",
  routeGuardMiddleware(true),
  uploadImageMiddleware.single("image"),
  uploadController
);
module.exports = router;
