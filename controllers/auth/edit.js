"use strict";

const User = require("./../../models/user/user");

module.exports = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    {
      ...(name && { name }),
      ...(email && { email })
    },
    { new: true }
  )
    .then(user => {
      res.json({ user });
    })
    .catch(error => {
      next(error);
    });
};
