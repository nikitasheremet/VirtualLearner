const express = require('express');
const router  = express.Router();
// const dbQuery = require("../database_queries")

router.get("/", (req, res) => {
  res.render("home_page");
})

// router.get("/:title", (req, res) => {
//   const resourceTitle = req.params.title;
//   const wall = dbQuery.findAllResourcesByTitle(resourceTitle);
// }
// )


module.exports =  router
