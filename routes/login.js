const express = require('express');
const router  = express.Router();



router.get("/", (req, res) => {
  res.render("login");
})

module.exports =  router

  // const login =  function(email, password) {
  //   return db.getUserWithEmail(email)
  //   .then(user => {
  //     if (bcrypt.compareSync(password, user.password)) {
  //       return user;
  //     }
  //     return null;
  //   });
  // }
  // exports.login = login;

  // router.post('/login', (req, res) => {
  //   const {email, password} = req.body;
  //   login(email, password)
  //     .then(user => {
  //       if (!user) {
  //         res.send({error: "error"});
  //         return;
  //       }
  //       req.session.userId = user.id;
  //       res.send({user: {name: user.name, email: user.email, id: user.id}});
  //     })
  //     .catch(e => res.send(e));
  // });
