const usersRouter = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const SALT = 10;
//Me fijo porque en el app tengo una ruta base
//usada en app.use("/api/users", usersRouter)
//Entonces la ruta sera /api/users/
//Segun la accion va a haber distintas acciones para la misma ruta

usersRouter.post("/", async (req, res) => {
  const { username, name, password } = req.body;
  bcrypt.hash(password, SALT, async (err, hash) => {
    if (!err) {
      const user = new User({
        username,
        name,
        passwordHash: hash,
      });
      const saveUser = await user.save(); //espero el usuario creado
      res.send(saveUser);
    } else {
      res.send("error al crear");
    }
  });
});

usersRouter.get("/", async (req, res) => {
  let users = await User.find({}).populate("notes",{ //En el segundo parametro especifico que datos me quiero traer
    content:1,
    fecha:1,
    important:1,
    _id:0 //Si no quiero el id le pongo cero pero si no lo especifico me lo trae igual
  }); //De cada usuario creados a sus notas me trae toda la informacion. Usa el "ref" que pusimos en el Scheme.
  res.send(users);
});

usersRouter.put("/", async (req, res) => {
  let { username, name, password } = req.body;
  console.log(req.body)
  bcrypt.hash(password, SALT, async (err, hash) => {
    if (!err) {
      let newMod = {
        username,
        name,
        passwordHash: hash,
      };
      const modUser = await User.findOneAndUpdate(
        {
          username,
        },
        newMod,
        { new: true }
      );
      res.send(modUser);
    } else {
      res.send("error al crear");
    }
  });
});

module.exports = usersRouter;
