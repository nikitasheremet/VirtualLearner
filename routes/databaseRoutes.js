const express = require('express');
const router  = express.Router();

module.exports = function(router, database) {
  // Pull all categories belonging to a user
  router.post('/categories', (req, res) => {
    console.log(req.body);
    console.log("AJAX is hitting here!!");
    database.queryUserCategories(req.body.user_id).then(queryResult => {
      // console.log(queryResult);
      res.send(queryResult);
    })
  })
}
