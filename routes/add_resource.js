const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("add_resource");
  })

  // Route to show the new resource page
  // router.post("/", (req, res) => {
  //   let theirResource = req.session.theirResource;
  //   if (theirResource === undefined) {
  //     res.redirect("/home");
  //   } else {
  //     let templateVars = { resource: resources, user : db[theirResource]};
  //     res.render("add_resource", templateVars);
  //   }
  // });

  return router;
}

const bcrypt = require("bcrypt");


//put in scripts
// $(document).ready(function() {
//   $('textarea').keyup(function() {
//     var remaining = 150 - jQuery(this).val().length;
//     jQuery('.counter').text(remaining);
//     if (remaining < 0){
//       jQuery('.counter').text("Error: Length exceeded " + remaining);
//       $(".counter").css({"color": "red"});
//     } else if (remaining >= 0){
//       jQuery('.counter').text(remaining);
//       // $(".counter").css({"color": "#444E3B"});
//     }
//   });
// });
