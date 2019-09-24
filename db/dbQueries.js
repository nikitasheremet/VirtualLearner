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
    SELECT res.*, COUNT(DISTINCT likes.*) AS likes, COUNT(DISTINCT comments.*) AS comments_count
    FROM resources res
    LEFT JOIN likes ON res.id = likes.resource_id
    LEFT JOIN comments ON res.id = comments.resource_id
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
  SELECT resources.*, COUNT(DISTINCT likes.*) AS likes, COUNT(DISTINCT comments.*) AS comments_count
  FROM resources
  LEFT JOIN likes ON resources.id = likes.resource_id
  LEFT JOIN comments ON resources.id = comments.resource_id
  WHERE lower(title) LIKE $1
  GROUP BY resources.id;`;
  const queryParams = [`%${input.toLowerCase()}%`];

  return pool.query(queryString, queryParams)
    .then(res => {
      console.log(input)
      return res.rows
    })
    .catch(err => console.log(err))
}
exports.findAllResourcesByTitle = findAllResourcesByTitle;

const queryMyLikes = (data) => {
  // console.log("in the queries now!!!");
  values = [data, data]
  return pool.query(`
    SELECT res.*, COUNT(DISTINCT likes.*) AS likes, COUNT(DISTINCT comments.*) AS comments_count
    FROM likes
    LEFT JOIN resources res ON res.id = likes.resource_id
    LEFT JOIN comments ON res.id = comments.resource_id
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
    SELECT res.*, COUNT(DISTINCT likes.*) AS likes, COUNT(DISTINCT comments.*) AS comments_count
    FROM resources res
    LEFT JOIN likes ON likes.resource_id = res.id
    LEFT JOIN comments ON res.id = comments.resource_id
    WHERE res.user_id = $1 OR likes.user_id = $2
    GROUP BY res.id
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
  const queryString = `SELECT comment FROM comments WHERE resource_id = $1;`;
  const queryParams = [resourceId];

  return pool.query(
    queryString, queryParams
    ).then(res => res.rows)
}
exports.queryResourceComments = queryResourceComments;



const queryMyRatings = (data) => {
  values = [data, data]
  return pool.query(`
    SELECT res.*, COUNT(DISTINCT ratings.*) AS ratings
    LEFT JOIN resources res ON res.id = ratings.resource_id
    WHERE ratings.user_id = $1 AND res.user_id <> $2
    GROUP BY res.id
    ;`,values)
  .then(res => {
    console.log(res.rows);
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


