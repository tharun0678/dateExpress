const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const dateTime = new Date();
  const result = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDay()),
    100
  );
  response.send(
    `${result.getDay()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
