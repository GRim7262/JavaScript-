const express = require("express");
const app = express();
const phone = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home</h1> <a href='/api/phone'>Phone</a> ");
});

// app.get("/api/phone/:phoneID", (req, res) => {
//   const { phoneID } = req.params;
//   console.log(req.params);
//   const singleProduct = phone.find(
//     (product) => product.id === parseInt(phoneID)
//   );

//   if (!singleProduct) {
//     res.status(404).send("Product not found");
//   }

//   res.json(singleProduct);
// });

app.get("/api/v1/query", (req, res) => {
  let sortedPhone = [...phone];
  const { search, limit } = req.query;
  if (search) {
    sortedPhone = sortedPhone.filter((product) => {
      return product.name.toLowerCase().startsWith(search);
    });
  }
  if (limit) {
    sortedPhone.length = limit;
  }
  res.json(sortedPhone);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.....");
});
