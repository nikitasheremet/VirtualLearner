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
  console.log(req.body);
  let user_id = 1;
  let URL = req.body.url;
  let title = req.body.title;
  let description = req.body.description;
  let category = req.body.category;

  // Check that URL, title, and description password are provided
  if (URL === "" || title === "" || description === "") {
    res.status(400).send('Please make sure you provide URL, title and description');
  } else {
        //Insert resource into database
        db.query('INSERT INTO resources (user_id, url, title, description, category) VALUES ($1,$2,$3,$4,$5);', [user_id, URL, title, description, category])
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

