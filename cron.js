const targetServerUrl = "https://greencart-lhyadwrd.b4a.run/";
const axios = require("axios");
const cron = require("node-cron");

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
