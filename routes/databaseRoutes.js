const express = require('express');
const router  = express.Router();

const userID = {
  user_id: 1
};

module.exports = function(router, database) {
  router.get('/categories', (req, res) => {
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
        res.send(queryResult);
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
    })
  })

  router.get('/:title', (req, res) => {
    database.findAllResourcesByTitle(req.params.title).then(queryResult => {
      res.send(queryResult);
    })
  })
   router.get('/resources/liked', (req, res) => {
    database.queryMyLikes(userID.user_id).then(queryResult => {
      res.send(queryResult);
    })
  })
  router.post('/likes/add', (req, res) => {
    console.log("in database routes");
    console.log(req.data);
    // database.queryMyLikes(userID.user_id).then(queryResult => {
      res.send(queryResult);
    // })
  })
}
