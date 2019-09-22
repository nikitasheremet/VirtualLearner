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


const createResource = data => {
`<h3>${findAllResources(data).title}</h3>
  <div>
    <article>
      <p>${findAllResources(data).url}</p>
    </article>
  </div>`
}


const renderResource = data => {
  const wall = $("#resources_found");
  wall.append(createResource(data));
}


const findAllResources = (input) => {
  const queryString = `SELECT * FROM resources WHERE title LIKE $1;`;
  const queryParams = [`%${input}%`];

  pool.query(queryString, queryParams)
    .then(res => {
      console.log(res.rows)
      return res.rows[0]
    })
    .catch(err => console.log(err))

}

findAllResources('Horoscope')

$(document).ready(() => {
  renderResource('Horoscope')
});

