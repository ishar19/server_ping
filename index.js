const express = require("express");
const cron = require("node-cron");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Define a route for the Express app
app.get("/", (req, res) => {
  res.send("Express app is running!");
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});

module.exports = app;
