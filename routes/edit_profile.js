const express = require('express');
const router  = express.Router();

const updateUsers = (data,db) => {
  keys = Object.keys(data).filter(key => data[key]);
  for (let k in keys) {
    keys[k] = `${keys[k]} = '${data[keys[k]]}'`
  }
  console.log(keys);

  db.query(`
  UPDATE users
  SET ${keys}
  WHERE id = 1;
  ;`).then(res => {
    console.log("MADE ITTTTTT");
  })

}


module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("edit_profile");
  });

  router.post("/", (req, res) => {
    console.log(req.body);
    updateUsers(req.body, db)
    res.redirect("/home");
  });
    return router;
  };
