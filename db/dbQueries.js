const pool = require("./dbSetup");

const queryUserCategories = (user_id) => {
  // console.log("in the queries now!!!");
  // console.log(user_id);
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
  // console.log(user_id);
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
  const queryString = `
  SELECT resources.*, count(comments.*) as comments_count
  FROM resources JOIN comments ON resources.id = resource_id
  WHERE lower(title) LIKE $1 GROUP BY resources.id;`;
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
  // console.log(user_id);
  values = [data]
  console.log(values);
  return pool.query(`
    SELECT res.*
    FROM likes
    JOIN resources res ON res.id = likes.resource_id
    WHERE likes.user_id = $1
    ;`,values)
  .then(res => {
    return res.rows;
  })
}
exports.queryMyLikes= queryMyLikes;

const queryMyAll = (data) => {
  console.log("in the queries now!!!");
  // console.log(user_id);
  values = [data]
  console.log(data);
  return pool.query(`
    SELECT res.*
    FROM resources res
    WHERE res.user_id = $1
    ;`,values)
  .then(res => {
    return res.rows;
  })
}
exports.queryMyAll= queryMyAll;


const queryResourceComments = resource => {
  const queryString = `SELECT comment FROM comments WHERE resource_id = $1;`;
  const queryParams = [resource.id];

  return pool.query(
    queryString, queryParams
    ).then(res => res.rows)
}
exports.queryResourceComments = queryResourceComments;
