// const express = require('express');
// const router  = express.Router();


// module.exports = (db) => {
//   router.post("/", (req, res) => {
//     editProfile(req, res, db);
//   });
//   router.get("/", (req, res) => {
//     res.render("edit_profile");
//   })
//   return router;
// }


// function editProfile(req, res, db) {

// }


const express = require('express');
const router  = express.Router();


module.exports = () => {
  router.get("/", (req, res) => {
    console.log("here")
    res.render("edit_profile");
  });
    return router;
  };
