const express = require("express");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>Welcome to the API</h1>");
});


require("dotenv").config();
const port = process.env.PORT || 5005;

server.listen(port, () => {
  console.log(`\n* Server Running on http://localhost:${port}\n`);
});