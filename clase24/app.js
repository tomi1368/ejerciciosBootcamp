require("./index"); //importo la coneccion a la base de datos.
const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");
const app = express();
const port = 7800;
 //Importante poner despues de la importacion de la coneccion a base de datos
const mongoose = require("mongoose");
const usersRouter = require("./controllers/users")
/* const notesRouter = require("./controllers/notes") */
//Ahora con el Note puedo usar todos los metodos como find, instanciar una Nota



app.use(cors());
app.use(methodOverride());
app.use(express.json());



app.use("/api/users", usersRouter)

/* app.use("/api/notes", notesRouter) */

//El orden de los middlewares es muy importante
//Lo mejor es hacer aparte los middlewares y importarlos
//Creo controladores y los pongo antes que los handle errors

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

