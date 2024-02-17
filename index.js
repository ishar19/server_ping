const express = require("express");
const cron = require("node-cron");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Define the endpoint to be pinged
const targetServerUrl = "https://greencart-lhyadwrd.b4a.run/"; // Replace with your server's URL

// Define a route for the Express app
app.get("/", (req, res) => {
  res.send("Express app is running!");
});

// Define a cron job that runs every minute
cron.schedule("* * * * *", () => {
  // Make a GET request to the target server to prevent it from going to sleep
  axios
    .get(targetServerUrl)
    .then((response) => {
      console.log(
        `Ping successful at ${new Date().toLocaleString()}`,
        response.status,
        response.statusText
      );
    })
    .catch((error) => {
      console.error(`Error pinging server: ${error.message}`);
    });
});

// Start the Express app
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});
