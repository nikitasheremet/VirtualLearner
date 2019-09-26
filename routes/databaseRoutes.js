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
  router.get('/resources/liked', (req, res) => {
    database.queryMyLikes(userID.user_id).then(queryResult => {
      res.send(queryResult);
    })
  })
  router.post('/add-rating/:id', (req, res) => {
    let data = {
      rating: req.body.rating,
      user_id: userID.user_id,
      resource_id: req.params.id
    }
    database.queryAddRating(data)
  })
  router.get('/get-user-rating', (req, res) => {
    let data = {
      user_id: userID.user_id
    }
    database.queryGetUsersRating(data).then((queryResult) => {
      res.send(queryResult);
    })
  })
  router.post('/delete-rating/:id', (req, res) => {
    let data = {
      user_id: userID.user_id,
      resource_id: req.params.id
    }
    database.queryDeleteRating(data)
  })
  router.get('/add-like/:id', (req, res) => {
    let data = {
      user_id: userID.user_id,
      id: req.params.id
    }
    database.queryAddLike(data).then(queryResult => {
      res.send(queryResult);
    })
  })
  router.get('/delete-like/:id', (req, res) => {
    let data = {
      user_id: userID.user_id,
      id: req.params.id
    }
    database.queryDeleteLike(data).then(queryResult => {
      res.send(queryResult);
    })
  })

  router.get('/:resourceId/comments', (req, res) => {
    database.queryResourceComments(req.params.resourceId).then(queryResult => {
      res.send(queryResult);
    })
  })

  router.get('/delete/resource/:id', (req, res) => {
    database.queryDeleteResource(req.params.id).then(queryResult => {
      res.send(queryResult);
    })
  })

  router.post('/new-comment', (req, res) => {
    database.insertComment(req.body)
  })
  router.get('/resource/:id', (req, res) => {
    database.findResourceById(req.params.id).then(queryResult => {
      res.send(queryResult);
    })
  })
  router.get('/:title', (req, res) => {
    database.findAllResourcesByTitle(req.params.title).then(queryResult => {
      console.log(queryResult);
      res.send(queryResult);
    })
  })
}
