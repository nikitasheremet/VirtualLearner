//! Please note database name. This should be the name of your local database


const { Pool } = require("pg");

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'reswall'
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}
