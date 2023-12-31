const express = require("express");
const app = express();
const { createTodo } = require("./types");
app.use(express.json());

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }
});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  // const parsePayload;
});

// write basic express boilerplate code,
// with express.json() middleware
