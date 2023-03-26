const express = require("express");

const messagesController = require("./controllers/messages.controller");
const friendController = require("./controllers/friends.controller");

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const end = Date.now() - start;
  console.log(`${req.method} ${req.url} ${end}ms`);
});

app.use(express.json());

app.get("/friends", friendController.getFriends);
app.post("/friends", friendController.postFriend);
app.get("/friends/:id", friendController.getFriend);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessage);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
