const express = require('express');
const router  = express.Router();


module.exports = () => {
  router.get("/", (req, res) => {
    console.log("here")
    res.render("edit_profile");
  });
    return router;
  };
