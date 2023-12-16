const express = require("express");
const app = express();
const phone = require("./data");

app.get("/", (req, res) => {
  res.json([
    {
      fname: "John",
      lname: "Cena",
    },
    {
      fname: "Cody",
      lname: "Rhodes",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.....");
});
