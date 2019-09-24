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
  let URL = req.body.first_name.trim();
  let title = req.body.last_name.trim();
  let description = req.body.email;
  let category = req.body.password;

  // Check that URL, title, and description password are provided
  if (URL === "" || title === "" || description === "") {
    res.status(400).send('Please make sure you provide URL, title and description');
  } else {
        //Insert resource into database
        pool.query('INSERT INTO resources(URL, title, description) VALUES ($1,$2,$3)', (error, results) => {
          if (error) {
            res.status(400).send(error.message);
          } else {

            //resource inserted correctly, redirect to home page
            res.redirect('/home')
          }
        });
      }
    }



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
