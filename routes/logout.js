const express = require('express');
const router  = express.Router();
// const dbQuery = require("../database_queries")

router.get("/", (req, res) => {
  res.redirect("/");
})



module.exports =  router

