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
    // console.log("in routes");
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
    database.queryMyAll(userID.user_id).then(queryResult => {
      results.myResources = queryResult;
      results.ID = userID.user_id;
      res.send(results);
    })
  })
  router.get('/likes/:id', (req, res) => {
    // console.log("IAMHERENOW")

<<<<<<< HEAD
=======
    database.queryGetLikesForResource(req.params.id).then(queryResult => {
      res.send(queryResult);
    })
  })

  router.get('/mylikes', (req, res) => {
    console.log("in router");
    database.queryUsersLikes(userID.user_id).then(queryResult => {
      res.send(queryResult);
    })
  })
>>>>>>> 43c32b05790104a0e60be51ad314cc6da5b1c313
  router.get('/:resourceId/comments', (req, res) => {
    database.queryResourceComments(req.params.resourceId).then(queryResult => {
      res.send(queryResult);
    })
  })
   router.get('/resources/liked', (req, res) => {
    database.queryMyLikes(userID.user_id).then(queryResult => {
      res.send(queryResult);
    })
  })
  router.get('/add-like/:id', (req, res) => {
    let data = {
      user_id: userID.user_id,
      id: req.params.id
    }
    // console.log(data);
    database.queryAddLike(data).then(queryResult => {
      res.send(queryResult);
    })
  })
  router.get('/delete-like/:id', (req, res) => {
    let data = {
      user_id: userID.user_id,
      id: req.params.id
    }
    // console.log(data);
    database.queryDeleteLike(data).then(queryResult => {
      res.send(queryResult);
    })
  })

  router.post('/new-comment', (req, res) => {
<<<<<<< HEAD
    console.log(req.body)
    database.insertComment(req.body)
=======
    const queryString = `INSERT INTO comments (comment, user_id, resource_id) VALUES ($1, $2, $3);`;
    const queryValues = [req.body, 1, 4];
    database.query(queryString, queryValues).then(queryResult => {
      res.send(queryResult)

    })
>>>>>>> 43c32b05790104a0e60be51ad314cc6da5b1c313
  })
  router.get('/:title', (req, res) => {
    database.findAllResourcesByTitle(req.params.title).then(queryResult => {
      res.send(queryResult);
    })
  })
}
