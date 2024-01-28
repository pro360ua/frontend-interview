import express from "express";
import data from "./data.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("api server is running");
});

app.get("/users", (req, res) => {
  const { users } = data;
  const { query } = req.query;

  let result = users;

  if (query) {
    result = result.filter(
      (user) =>
        user.firstName.toLowerCase().includes(query.toLowerCase()) ||
        user.lastName.toLowerCase().includes(query.toLowerCase())
    );
  }

  res.json(result);
});

app.get("/users/:id", (req, res) => {
  const { users } = data;
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
