const pool = require("./dbSetup");

const queryUserCategories = (user_id) => {
  console.log("in the queries now!!!");
  console.log(user_id);
  values = [user_id]
  return pool.query(`
    SELECT cat.name
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
