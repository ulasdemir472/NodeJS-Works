const express = require("express");
const friendController = require("../controllers/friends.controller");
const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("IP address: ", req.ip);
  next();
});

friendsRouter.get("/", friendController.getFriends);
friendsRouter.post("/", friendController.postFriend);
friendsRouter.get("/:id", friendController.getFriend);

module.exports = friendsRouter;
