"use strict";

const User = require("./../../models/user/user");

module.exports = (req, res, next) => {
  User.findByIdAndDelete(req.user._id)
    .then(() => {
      res.json({ type: "success" });
    })
    .catch(error => {
      next(error);
    });
};
