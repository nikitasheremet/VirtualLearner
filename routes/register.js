const express = require('express');
const router  = express.Router();

const bcrypt = require("bcrypt");

// handle the request to register a new user(POST to register)
module.exports = (db) => {
  router.post("/", (req, res) => {
    registerUser(req, res, db);
  });
    return router;
  };

function registerUser(req, res, db) {

  //Extract registration information from form
  let firstName = req.body.first_name.trim();
  let lastName = req.body.last_name.trim();
  let email = req.body.email;
  let password = req.body.password;

  if (email === "" || password === "") {
    res.status(400).send('Please make sure your email and password are provided');
  } else if (getUserByEmail(email, db) !== null) {
    res.status(400).send('Email already exists');
  // } else {

    // hash password for security
    const hashedPassword = bcrypt.hashSync(password,10);

    let user = {
      id: id,
      email: email,
      password: hashedPassword
    };

    //adding user to database
  }
};


// // db.query(`SELECT * FROM users;`)
// // .then(data => {
// //   const users = data.rows;
// //   res.json({ users });
// // })
// // .catch(err => {
// //   res
// //     .status(500)
// //     .json({ error: err.message });
// // });

const getUserByEmail = function(email, db) {
  let result = null;
  for (let id in db){
    let user = db[id];
    if (user.email === email) {
      result = user;
      break;
    }
  }
  return result;
};
