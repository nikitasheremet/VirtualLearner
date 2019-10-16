# LHL Node Skeleton

NPM install

Create a database in PSQL

Copy .env.example and rename to .env

In the .env make sure all the fields are filled in and match your setup (You can check the user associated with your created database by typing \l in psql, and looking under the owner column; you can set the password in psql, after you connect to your database \c <database-name> type \password)

Run - npm run start

## Getting Started

1. Install dependencies: `npm i`
2. Reset database: `npm run db:reset`

- Check the db folder to see what gets created and seeded in the SDB

7. Run the server: `npm run local`

- Note: nodemon is used, so you should not have to restart your server

8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
