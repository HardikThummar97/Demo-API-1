let express = require("express");

let app = express();

let users = require("./users.json");

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to Home page");
});

app.get("/users", function (req, res) {
  res.send(users);
});

app.post("/users", function (req, res) {
  let x = req.body;
  users.push(x);
  res.send(`Updated succesfully
  data: ${x}`);
});

app.patch("/users/:id", function (req, res) {
  let id = req.params.id;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      users[i] = req.body;
      break;
    }
  }
  res.send(users);
});

app.delete("/users/:id", function (req, res) {
  let id = req.params.id;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      users.splice(i, 1);
      break;
    }
  }
  res.send(users);
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
