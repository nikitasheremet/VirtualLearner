const express = require('express');
const router  = express.Router();

const userID = {
  user_id: 1
};

module.exports = function(router, database) {
  // Pull all categories belonging to a user
  router.get('/categories', (req, res) => {
    // console.log(req.body);
    database.queryUserCategories(userID.user_id).then(queryResult => {
      res.send(queryResult);
    })
  })

  router.get('/categories/:category', (req, res) => {
    console.log("in routes");
    let data = {
      user_id: userID.user_id,
      category: req.params.category
    }
    // console.log(data);
    database.queryMyCategory(data).then(queryResult => {
      res.send(queryResult);
    })
  })
}
