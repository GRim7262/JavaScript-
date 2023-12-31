const mongoose = require("moongoose");
mongoose.connect(
  "mongodb+srv://vinalpawar1:*****@cluster0.fm4wjhl.mongodb.net/"
);
const totSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
