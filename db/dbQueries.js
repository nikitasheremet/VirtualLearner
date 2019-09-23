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


const findAllResourcesByTitle = (input) => {
  const queryString = `SELECT * FROM resources WHERE title LIKE $1;`;
  const queryParams = [`%${input}%`];

  return pool.query(queryString, queryParams)
    .then(res => {
      return res.rows
    })
    .catch(err => console.log(err))
}

exports.findAllResourcesByTitle = findAllResourcesByTitle;
