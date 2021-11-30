const usersRouter = require("express").Router();
const User = require("../db/models/User");
const bcrypt = require("bcrypt");
const SALT = 10;

usersRouter.get("/", async (req, res) => {
  let users = await User.find({});
  res.send(users);
});

usersRouter.get("/:nombre", async (req, res) => {
  let nombre = req.params.nombre
  let user = await User.findOne({nombre});
  if(user){
    res.send({data:user,error:false});
  }else{
    res.send({found:"Not found",error:true});
  }
});

usersRouter.post("/", (req, res) => {
  let { nombre, email, password } = req.body;
  console.log(nombre,email,password)
  bcrypt.hash(password, SALT, async (err, hash) => {
    if (!err) {
      let newUser = new User ({
        nombre,
        email,
        password: hash,
      });
      try {
        await newUser.save();
        let newUsers = await User.find({})
        res.send(newUsers)
      } catch (err) {
        res.send({ error: "id incorrecto" });
      }
    } else {
      res.status(404)
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
      await User.findOneAndUpdate({ email }, newUser);
      let newUsers = await User.find({})
      res.send(newUsers)
    }else{
      res.send({error:"nose pudo modificar"})
    }
  });
});

usersRouter.delete("/", async (req,res)=>{
  let {email} = req.body
  console.log(email)
  await User.findOneAndDelete({email})
  let newUsers = await User.find({})
  res.send(newUsers) 
})

module.exports = usersRouter;
