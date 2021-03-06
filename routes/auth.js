"use strict";

const { Router } = require("express");
const router = Router();

// ------------------------------ USER ----------------------------------
// ------------------------------ USER ----------------------------------
// ------------------------------ USER ----------------------------------

const uploadImageMiddleware = require("./../middleware/picture-upload");
const routeGuardMiddleware = require("./../middleware/route-guard");

const signUpController = require("./../controllers/auth/sign-up");
const signInController = require("./../controllers/auth/sign-in");
const signedInController = require("./../controllers/auth/signed-in");
const signOutController = require("./../controllers/auth/sign-out");
const uploadController = require("./../controllers/auth/upload-profile-pic");
const editController = require("./../controllers/auth/edit");
const deleteController = require("./../controllers/auth/delete");

router.post("/auth/signup", routeGuardMiddleware(false), signUpController);
router.post("/auth/signin", routeGuardMiddleware(false), signInController);
router.post("/auth/signout", routeGuardMiddleware(true), signOutController);
router.get("/auth/signedin", signedInController);
router.post("/auth/edit", routeGuardMiddleware(true), editController);
router.post("/auth/delete", routeGuardMiddleware(true), deleteController);
router.post(
  "/auth/upload",
  routeGuardMiddleware(true),
  uploadImageMiddleware.single("image"),
  uploadController
);

module.exports = router;
