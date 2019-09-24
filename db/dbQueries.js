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
  console.log("in the queries now!!!");
  values = [data.user_id,data.category]
  return pool.query(`
    SELECT res.*
    FROM resources res
    JOIN users ON res.user_id = users.id
    WHERE users.id = $1 AND res.category = $2
    ;`,values)
  .then(res => {
    return res.rows;
  })
}
exports.queryMyCategory = queryMyCategory;

const findAllResourcesByTitle = (input) => {
  const queryString = `SELECT * FROM resources WHERE lower(title) LIKE $1;`;
  const queryParams = [`%${input.toLowerCase()}%`];

  return pool.query(queryString, queryParams)
    .then(res => {
      console.log(res.rows)
      return res.rows
    })
    .catch(err => console.log(err))
}
exports.findAllResourcesByTitle = findAllResourcesByTitle;

const queryMyLikes = (data) => {
  console.log("in the queries now!!!");
  values = [data, data]
  return pool.query(`
    SELECT res.*
    FROM likes
    JOIN resources res ON res.id = likes.resource_id
    WHERE likes.user_id = $1 AND res.user_id <> $2
    ;`,values)
  .then(res => {
    return res.rows;
  })
}
exports.queryMyLikes= queryMyLikes;

const queryMyAll = (data) => {
  values = [data,data]
  return pool.query(`
    SELECT res.*, COUNT(likes.resource_id) AS likes
    FROM resources res
    LEFT JOIN likes ON likes.resource_id = res.id
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


