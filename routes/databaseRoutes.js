const express = require('express');
const router  = express.Router();

module.exports = function(router, database) {
  // Pull all categories belonging to a user
  router.post('/categories', (req, res) => {
    console.log(req.body);
    database.queryUserCategories(req.body.user_id).then(queryResult => {
      res.send(queryResult);
    })
  })

  router.post('/categories/results', (req, res) => {
    console.log(req.body);
    database.queryUserCategories(req.body.user_id).then(queryResult => {
      res.send(queryResult);
    })
  })
}
