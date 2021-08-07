let express = require("express"); //Importing express framework

let app = express(); //It's a function thus need to execute it;

let users = require("./users.json"); //Importing users from loca; json file

app.use(express.json()); //Allowing express to parse post data

app.get("/", function (req, res) {
  res.send("Welcome to Home page");
});

app.get("/users", function (req, res) {
  res.send(users);
});

app.post("/users", function (req, res) {
  let x = req.body;
  users.push(x);
  res.send(users);
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

app.listen(8001, () => {
  console.log("listening on port 8001");
});
