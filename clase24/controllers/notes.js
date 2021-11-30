const notesRouter = require("express").Router();
const Note = require("../models/Note");
const User = require("../models/User");
//Me fijo porque en el notesRouter tengo una ruta base
//usada en notesRouter.use("/api/users", usersRouter)
//Entonces la ruta sera /api/users/

/* notesRouter.get("/", async (req,res)=>{
    try{
        let notes = await Note.find({})
        let allNotes = await notes
        res.send(allNotes)
    }catch(err){
        res.send(err)
    }
})  Forma con async await
 */

//Segun la accion va a haber distintas acciones para la misma ruta salvo la de buscar uno solo

notesRouter.get("/", (req, res) => {
  Note.find({}).populate("user",{
    username:1,
    name:1
  })
    .then((dbres) => {
      res.send(
        dbres.map((el) => {
          let { _id, __v, ...rest } = el._doc;
          return {
            ...rest,
            _id,
          }; //Le saco __v para no molestar
        })
      );
    })
    .catch((err) => res.send("error a encontrar las notas"));
});

notesRouter.get("/findNote", (req, res, next) => {
  let { name } = req.body;
  Note.findOne({
    name,
  })
    .then((dbres) => {
      let { _id, __v, ...rest } = dbres._doc;
      let changeRes = {
        ...rest,
        _id,
      };
      res.send(changeRes);
    })
    .catch((error) => next(error));
});

notesRouter.post("/", async (req, res) => {
  let { content, name, important, user} = req.body;
  const userfd = await User.findById(user);
  //Le asigno un unico usuario a la nota, y lo hago por Id del usuario
  let newNote = new Note({
    content,
    name,
    fecha: new Date(),
    important,
    user:userfd._id
  });
  try {
    let a = await newNote.save();
    let {_id} = a
    //ahora que creamos la nota la agregamos al array de notas del usuario, el en cual voy a encontrar los ids de las notas
    userfd.notes = userfd.notes.concat(_id)
    await userfd.save() //guardamos el usuario con las notas modificadas
    res.send(userfd)
  } catch (err) {
    res.send("error");
  }
});

notesRouter.delete("/", (req, res, next) => {
  let { name } = req.body;
  Note.findOneAndDelete({
    name,
  })
    .then((response) => res.send(response)) //Me devuelve el eliminado
    .catch((error) => next(error));
});

notesRouter.put("/", (req, res) => {
  let { content, name, important = false } = req.body;
  let newNote = {
    content,
    name,
    important,
  };
  Note.findOneAndUpdate(
    {
      name,
    },
    newNote,
    { new: true }
  ) //new en true hace que devuelva el elemento modificado, sin esto me devuelve el antes de modificar
    .then((dbres) => res.send(dbres))
    .catch((err) => res.send(err));
});

module.exports = notesRouter;
