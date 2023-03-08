const express = require("express");
const { UserModel } = require("./models/Users");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(express.json()); //gelen veriyi json formatında alabilmek için
app.use(cors()); //frontend ile bağlanabilmek için

const uri =
  "mongodb+srv://ulasdemir472:ulasd9137@cluster0.tmfldcw.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to DB!!");
  })
  .catch((err) => {
    throw err;
  });

app.get("/getUsers", async (req, res) => {
  const users = await UserModel.find();
  return res.status(200).json(users);
});

app.post("/createUser", async (req, res) => {
  const user = req.body; //thunder client ile body e yazarız front olmadığı için
  const newUser = new UserModel(user);
  await newUser.save(); //koleksiyona veriyi ekler

  res.status(200).json(user);
});

app.listen(3001, () => {
  console.log("Server running!!");
});
