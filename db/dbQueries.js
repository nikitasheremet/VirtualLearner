const pool = require("./dbSetup");

const queryUserCategories = (user_id) => {
  values = [user_id]
  return pool.query(`
    SELECT DISTINCT(res.category)
    FROM resources res
    JOIN users ON res.user_id = users.id
    WHERE users.id = $1
    ;`,values)
  .then(res => {
    return res.rows;
  })
}
exports.queryUserCategories = queryUserCategories;

const queryMyCategory = (data) => {
  // console.log("in the queries now!!!");
  values = [data.user_id,data.category]
  // console.log(values);
  return pool.query(`
    SELECT res.*, COUNT(DISTINCT likes.*) AS likes, COUNT(DISTINCT comments.*) AS comments_count, AVG(ratings.rating) AS rating
    FROM resources res
    LEFT JOIN likes ON res.id = likes.resource_id
    LEFT JOIN comments ON res.id = comments.resource_id
    LEFT JOIN ratings ON res.id = ratings.resource_id
    WHERE res.user_id = $1 AND res.category = $2
    GROUP BY res.id
    ;`,values)
  .then(res => {
    // console.log(res.rows)
    return res.rows;
  })
}
exports.queryMyCategory = queryMyCategory;

const findAllResourcesByTitle = (input) => {
  const queryString = `
  SELECT resources.*, COUNT(DISTINCT likes.*) AS likes, COUNT(DISTINCT comments.*) AS comments_count, AVG(ratings.rating) AS rating
  FROM resources
  LEFT JOIN likes ON resources.id = likes.resource_id
  LEFT JOIN comments ON resources.id = comments.resource_id
  LEFT JOIN ratings ON resources.id = ratings.resource_id
  WHERE lower(title) LIKE $1
  GROUP BY resources.id
  ORDER BY COUNT(DISTINCT likes.*)
  LIMIT 20;`;
  const queryParams = [`%${input.toLowerCase()}%`];

  return pool.query(queryString, queryParams)
    .then(res => {
      console.log(input)
      return res.rows
    })
    .catch(err => console.log(err))
}
exports.findAllResourcesByTitle = findAllResourcesByTitle;

const findResourceById = id => {
  const queryString = `
  SELECT resources.*, COUNT(DISTINCT likes.*) AS likes, COUNT(DISTINCT comments.*) AS comments_count, AVG(ratings.rating) AS rating
  FROM resources
  LEFT JOIN likes ON resources.id = likes.resource_id
  LEFT JOIN comments ON resources.id = comments.resource_id
  LEFT JOIN ratings ON resources.id = ratings.resource_id
  WHERE resources.id = $1
  GROUP BY resources.id;`;
  const queryParams = [id];

  return pool.query(queryString, queryParams)
    .then(res => res.rows[0])
    .catch(err => console.log(err))
}
exports.findResourceById = findResourceById;

const queryMyLikes = (data) => {
  // console.log("in the queries now!!!");
  values = [data, data]
  return pool.query(`
    SELECT res.*, COUNT(DISTINCT likes.*) AS likes, COUNT(DISTINCT comments.*) AS comments_count,  AVG(ratings.rating) AS rating
    FROM likes
    LEFT JOIN resources res ON res.id = likes.resource_id
    LEFT JOIN comments ON res.id = comments.resource_id
    LEFT JOIN ratings ON res.id = ratings.resource_id
    WHERE likes.user_id = $1 AND res.user_id <> $2
    GROUP BY res.id
    ;`,values)
  .then(res => {
    console.log(res.rows);
    return res.rows;
  })
}
exports.queryMyLikes= queryMyLikes;

const queryMyAll = (data) => {
  values = [data,data]
  return pool.query(`
    SELECT res.*, COUNT(DISTINCT likes.*) AS likes, COUNT(DISTINCT comments.*) AS comments_count, AVG(ratings.rating) AS rating
    FROM resources res
    LEFT JOIN likes ON likes.resource_id = res.id
    LEFT JOIN comments ON res.id = comments.resource_id
    LEFT JOIN ratings ON res.id = ratings.resource_id
    WHERE res.user_id = $1 OR likes.user_id = $2
    GROUP BY res.id
    ORDER BY res.user_id
    ;`,values)
  .then(res => {
    // console.log(res.rows)
    return res.rows;
  })
}
exports.queryMyAll = queryMyAll;

const queryAddLike = (data) => {
  values = [data.user_id,data.id]
  console.log(data);
  return pool.query(`
    INSERT INTO likes (user_id, resource_id)
    VALUES ($1,$2)
    ;`,values)
  .then(() => {
    return "success";
  })
}
exports.queryAddLike = queryAddLike;


const queryResourceComments = resourceId => {
  const queryString = `
  SELECT comment, profile_pic, time
  FROM comments
  JOIN users ON users.id = user_id
  WHERE resource_id = $1;`;
  const queryParams = [resourceId];

  return pool.query(
    queryString, queryParams
    ).then(res => res.rows)
}
exports.queryResourceComments = queryResourceComments;

const insertComment = data => {
  const queryString = `INSERT INTO comments (comment, user_id, resource_id) VALUES ($1, $2, $3);`;
  const queryValues = [data.input, data.userId, data.resourceId];
  return pool.query(queryString, queryValues).then(res => res.rows)
}
exports.insertComment = insertComment;

const queryDeleteLike = (data) => {
  values = [data.user_id,data.id]
  // console.log(data);
  return pool.query(`
    DELETE FROM likes
    WHERE user_id = $1 AND resource_id = $2
    RETURNING *;`,values)
  .then((res) => {
    console.log(res.rows);
    return "success";

  })
}
exports.queryDeleteLike = queryDeleteLike;

const queryUsersLikes = (data) => {
  values = [data]
  // console.log("DATA IS",data);
  return pool.query(`
    SELECT *
    FROM likes
    WHERE user_id = $1
    ;`,values)
  .then((res) => {
    // console.log(res.rows);
    return res.rows;

  })
}
exports.queryUsersLikes = queryUsersLikes;

const queryGetLikesForResource = (data) => {
  values = [data]
  console.log("DATA IS",data);
  return pool.query(`
    SELECT COUNT(*)
    FROM likes
    WHERE resource_id = $1
    ;`,values)
  .then((res) => {
    console.log(res.rows);
    return res.rows;

  })
}
exports.queryGetLikesForResource = queryGetLikesForResource;


const queryMyRatings = (data) => {
  values = [data]
  return pool.query(`
    SELECT res.*, COUNT(*), AVG(ratings.rating) AS ratings
    FROM resources AS res LEFT JOIN ratings ON res.id = ratings.resource_id
    GROUP BY res.id
    ;`,values)
  .then(res => {
    return res.rows;
  })
}
exports.queryMyRatings= queryMyRatings;


const queryRatings = (data) => {
  values = [data.user_id, data.id]
  return pool.query('INSERT INTO ratings(user_id, resource_id) VALUES ($1, $2);', values)
  .then(() => {
    return "success";
  })
};

exports.queryRatings = queryRatings

const queryAddRating = (data) => {
  values = [data.rating,data.user_id, data.resource_id]
  pool.query(`
  INSERT INTO ratings(rating, user_id, resource_id)
  VALUES ($1, $2, $3)
  ;`, values)
  .then(() => {
    return "success";
  })
};

exports.queryAddRating = queryAddRating

const queryDeleteRating = (data) => {
  values = [data.user_id, data.resource_id]
  pool.query(`
    DELETE FROM ratings
    WHERE user_id = $1 AND resource_id = $2
    ;`,values)
  .then(() => {
    return "success";
  })
};

exports.queryDeleteRating = queryDeleteRating

const queryGetUsersRating = (data) => {
  values = [data.user_id]
  return pool.query(`
    SELECT rating, resource_id
    FROM ratings
    WHERE user_id = $1
    ;`,values)
  .then((res) => {
    return res.rows;
  })
};

exports.queryGetUsersRating = queryGetUsersRating

const queryDeleteResource = id => {
  const queryString = `DELETE FROM resources WHERE resources.id = $1 AND user_id = $2;`;
  //! Hard coded user_id
  const queryValues = [id, 1];
  return pool.query(queryString, queryValues).then(res => console.log(res))
}

exports.queryDeleteResource = queryDeleteResource

const queryTopResources = () => {
  const queryString = `
  SELECT resources.*, COUNT(DISTINCT likes.*) AS likes, COUNT(DISTINCT comments.*) AS comments_count, AVG(ratings.rating) AS rating
  FROM resources
  LEFT JOIN likes ON resources.id = likes.resource_id
  LEFT JOIN comments ON resources.id = comments.resource_id
  LEFT JOIN ratings ON resources.id = ratings.resource_id
  GROUP BY resources.id
  ORDER BY RANDOM()
  LIMIT 9;`;

  return pool.query(queryString)
    .then((res) => {
      return res.rows
    })
    .catch(err => console.log(err))
}
exports.queryTopResources = queryTopResources;

