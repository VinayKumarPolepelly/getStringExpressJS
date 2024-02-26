const express = require("express");
const a = express();

a.get("/", (request, response) => {
  response.send("Express JS");
});

module.exports = a;
