"use strict";

const User = require("../../models/user/user");

module.exports = (req, res, next) => {
  User.findByIdAndDelete(req.user._id)
    .then(() => {
      res.json({ type: "success" });
      // console.log(req.user._id);
    })
    .catch(error => {
      next(error);
      console.log("ERRORRR");
    });
};
