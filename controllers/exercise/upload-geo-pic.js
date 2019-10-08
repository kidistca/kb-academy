// "use strict";

// const Geography = require("../../models/exercises/exercise-geo");

// module.exports = (req, res, next) => {
//   const { url } = req.file;
//   console.log(req.file);
//   Geography.findByIdAndUpdate(
//     req.exercise._id,
//     {
//       ...(url && { image: url })
//     },
//     { new: true }
//   )
//     .then(exercise => {
//       if (!exercise) {
//         next(new Error("not_found"));
//         return;
//       }
//       res.json({ exercise });
//     })
//     .catch(error => {
//       next(error);
//     });
// };
