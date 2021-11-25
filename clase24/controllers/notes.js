const notesRouter = require("express").Router();
const Note = require("../models/Note");
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
notesRouter.get("/", (req, res) => {
  Note.find({})
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

notesRouter.post("/newNote", (req, res) => {
  let { content, name, important } = req.body;
  let newNote = new Note({
    content,
    name,
    fecha: new Date(),
    important,
  });
  newNote
    .save()
    .then((dbres) => {
      res.send(dbres);
    })
    .catch((err) => res.send(err));
});

notesRouter.delete("/deleteOne", (req, res, next) => {
  let { name } = req.body;
  Note.findOneAndDelete({
    name,
  })
    .then((response) => res.send(response)) //Me devuelve el eliminado
    .catch((error) => next(error));
});

notesRouter.put("/changeOne", (req, res) => {
  let { content, name, important } = req.body;
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

module.exports = usersRouter;
