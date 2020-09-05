require('dotenv').config({ path: './config.env' })

const app = require('./app')

const port = process.env.PORT || 5005;

app.listen(port, () => {
  console.log(`\n* Server Running on http://localhost:${port}\n`);
});