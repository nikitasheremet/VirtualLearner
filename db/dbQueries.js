const pool = require("./dbSetup");

const queryUserCategories = (user_id) => {
  // console.log("in the queries now!!!");
  // console.log(user_id);
  values = [user_id]
  return pool.query(`
    SELECT DISTINCT(cat.name)
    FROM categories cat
    JOIN resources res ON res.category_id = cat.id
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
    JOIN categories cat ON res.category_id = cat.id
    JOIN users ON res.user_id = users.id
    WHERE users.id = $1 AND cat.name = $2
    ;`,values)
  .then(res => {
    return res.rows;
  })
}

exports.queryMyCategory = queryMyCategory;

const queryMyLikes = (data) => {
  console.log("in the queries now!!!");
  // console.log(user_id);
  values = [data.user_id,data.category]
  return pool.query(`
    SELECT res.*
    FROM users
    JOIN likes ON likes.user_id = users.id
    JOIN resources res ON res.id = likes.property_id
    JOIN categories cat ON res.category_id = cat.id
    WHERE likes.user_id = $1 AND cat.name = $2
    ;`,values)
  .then(res => {
    return res.rows;
  })
}

exports.queryMyLikes= queryMyLikes;
