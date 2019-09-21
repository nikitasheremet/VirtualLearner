//! Please note database name. This should be the name of your local database (ie. psql \c <database name>)

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lhlmidterm'
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}
