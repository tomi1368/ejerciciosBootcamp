require("./index"); //importo la coneccion a la base de datos.
const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");
const app = express();
const port = 7800;
const Note = require("./models/Note"); //Importante poner despues de la importacion de la coneccion a base de datos
const mongoose = require("mongoose");
//Ahora con el Note puedo usar todos los metodos como find, instanciar una Nota

app.use(cors());
app.use(methodOverride());
app.use(express.json());

app.get("/", (req, res) => {
  Note.find({})
    .then((dbres) => {
      res.send(
        dbres.map((el) => {
          let { _id, __v, ...rest} = el._doc;
          return {
            ...rest,
            _id,
          };//Le saco __v para no molestar
        })
      );
    })
    .catch((err) => res.send("error a encontrar las notas"));
});

app.get("/findNote", (req,res,next)=>{
    let {name} = req.body
    Note.findOne({
        name
    }).then(dbres=>{
        let {_id,__v,...rest} = dbres._doc
        let changeRes = {
            ...rest,
            _id
        }
        res.send(changeRes)
    }).catch(error=>next(error))
})

app.post("/newNote", (req, res) => {
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

app.delete("/deleteOne",(req,res,next)=>{
    let {name} = req.body
    Note.findOneAndDelete({
        name
    })
    .then(response=> res.send(response)) //Me devuelve el eliminado
    .catch(error=> next(error))
})

app.put("/changeOne",(req,res)=>{
    let {content,name,important} = req.body
    let newNote = {
        content,
        name,
        important
    }
    Note.findOneAndUpdate({
        name
    },newNote, {new:true}) //new en true hace que devuelva el elemento modificado, sin esto me devuelve el antes de modificar
    .then(dbres=> res.send(dbres))
    .catch(err=> res.send(err))
})

//El orden de los middlewares es muy importante
//Lo mejor es hacer aparte los middlewares y importarlos
app.use((error,request,response,next)=>{ //Pongo un middleware para este error cuando el id es incorrecto
    if(error.name === "CastError"){
        response.send({error: "id incorrecto"})
    }else{
        response.status(503).end()
    }
})
app.use((request,response,next)=>{ 
    response.status(404).end()
})
app.listen(port, () => {
  console.log(`conectado a ${port}`);
});
