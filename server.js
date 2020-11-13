require('dotenv').config({ path: './config.env' })

const db = require('./data/db-config')

// Check if the database is up

db.raw('select 1+1 as result').then(con => {
  console.log("* Database connected")
}).catch(err => {
  console.log(err);
  process.exit(1);
});

const app = require('./app')
const port = process.env.PORT || 5005;


console.log('* Environment -> ' + process.env.NODE_ENV)

app.listen(port, () => {
  console.log(`\n* Server Running on http://localhost:${port}\n`);
});