const express = require('express');
const router  = express.Router();


// handle the request to register a new user(POST to register)
module.exports = (db) => {
  router.post("/", (req, res) => {
    registerResource(req, res, db);
  });
    router.get("/", (req, res) => {
    res.render("add_resource");
  });
    return router;
  };



function registerResource(req, res, db) {

  //Extract registration information from form
  let URL = req.body.url;
  let title = req.body.title;
  let description = req.body.description;
  // let category = req.body.password;

  // Check that URL, title, and description password are provided
  if (URL === "" || title === "" || description === "") {
    res.status(400).send('Please make sure you provide URL, title and description');
  } else {
        //Insert resource into database
        db.query('INSERT INTO resources(url, title, description) VALUES ($1,$2,$3)', [URL, title, description])
        .then((_) => {
            //resource inserted correctly, redirect to home page
            res.redirect('/home');
            return true;
        })
        .catch((error) => {
            res.status(400).send(error.message);
          });
      }
}


// (user_id, url, title, description, category, thumbnail_photo



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
