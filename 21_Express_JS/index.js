const express = require("express");
const app = express();
app.use(express.json());
let books = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
  },
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  console.log(req.body);
  const newBooks = req.body;
  newBooks.id = books.length + 1;
  books.push(newBooks);
  res.status(201).json(books);
});

app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBooks = req.body;
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books[index] = { ...books[index], ...updatedBooks };
    res.json(books[index]);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    const deletedBook = books[index];
    books.splice(index, 1);
    res.json(deletedBook);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.....");
});
