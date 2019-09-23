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

    database.queryMyCategory(data).then(queryResult => {
      // results.myResources = queryResult;
      // database.queryMyLikes(data).then(queryResult2 => {
      //   results.myLikes = queryResult2
        res.send(queryResult);
      // })
      // res.send(queryResult);
    })
  })
  const results = {};
  router.get('/resources/all', (req, res) => {
    // console.log(req.body);
    console.log("here");
    database.queryMyAll(userID.user_id).then(queryResult => {
      // console.log(queryResult);
      results.myResources = queryResult;
      database.queryMyLikes(userID.user_id).then(queryResult2 => {
        results.myLikes = queryResult2
        // console.log(results);
        res.send(results);
      })
      // res.send(queryResult);
    })
  })

  router.get('/:title', (req, res) => {
    database.findAllResourcesByTitle(req.params.title).then(queryResult => {
      res.send(queryResult);
    })
  })
}
