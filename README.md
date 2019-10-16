# LHL Node Skeleton

## Getting Started

1. Install dependencies: `npm i`
2. Create a database in PSQL
3. Copy .env.example and rename to .env
4. In the .env make sure all the fields are filled in and match your setup (You can check the user associated with your created database by typing \l in psql, and looking under the owner column; you can set the password in psql, after you connect to your database \c <database-name> type \password)
5. Reset database: `npm run db:reset`
6. Run the server: `npm run local`
7. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
