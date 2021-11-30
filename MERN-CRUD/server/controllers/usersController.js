const usersRouter = require("express").Router();
const User = require("../db/models/User");
const bcrypt = require("bcrypt");
const SALT = 10;

usersRouter.get("/", async (req, res) => {
  let users = await User.find({});
  res.send(users);
});

usersRouter.post("/", (req, res) => {
  let { nombre, email, password } = req.body;
  bcrypt.hash(password, SALT, async (err, hash) => {
    if (!err) {
      let newUser = {
        nombre,
        email,
        password: hash,
      };
      try {
        let saveUser = await newUser.save();
        res.sendStatus(200).statusMessage("se creo");
      } catch (err) {
        response.send({ error: "id incorrecto" });
      }
    } else {
      res.sendStatus(404).statusMessage("asdasd");
    }
  });
});

usersRouter.put("/", (req, res) => {
  let { nombre, email, password } = req.body;
  bcrypt.hash(password, SALT, async (err, hash) => {
    if (!err) {
      let newUser = {
        nombre,
        email,
        password: hash,
      };
      let fdUser = await User.findOneAndUpdate({ email }, newUser);
      
    }
  });
});
module.exports = usersRouter;
