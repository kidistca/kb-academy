"use strict";

const { Router } = require("express");
const router = Router();
const uploadImageMiddleware = require("./../middleware/picture-upload");
const routeGuardMiddleware = require("./../middleware/route-guard");

const signUpController = require("./../controllers/auth/signup");
const signInController = require("./../controllers/auth/signin");
const signedInController = require("./../controllers/auth/signedin");
const signOutController = require("./../controllers/auth/signout");
const uploadController = require("./../controllers/auth/uploadprofilepic");
const editController = require("./../controllers/auth/edit");
const deleteController = require("./../controllers/auth/delete");

router.post("/auth/signup", routeGuardMiddleware(false), signUpController);
router.post("/auth/signin", routeGuardMiddleware(false), signInController);
router.get("/auth/signedin", signedInController);
router.post("/auth/signout", routeGuardMiddleware(true), signOutController);
router.post("/auth/edit", routeGuardMiddleware(true), editController);
router.post("/auth/delete", routeGuardMiddleware(true), deleteController);
router.post(
  "/auth/upload",
  routeGuardMiddleware(true),
  uploadImageMiddleware.single("image"),
  uploadController
);
module.exports = router;
