const db = require("../../db/index");

module.exports = {

  findAllResourcesByTitle = (input) => {
    const queryString = `SELECT * FROM resources WHERE title LIKE $1;`;
    const queryParams = [`%${input}%`];

    db.query(queryString, queryParams)
      .then(res => {
        console.log(res.rows)
        return res.rows
      })
      .catch(err => console.log(err))
  },

}
