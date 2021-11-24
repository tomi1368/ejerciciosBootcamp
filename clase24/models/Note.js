const {Schema,model} = require("mongoose")
const noteScheme = new Schema({
    content: String,
    name: String,
    fecha: Date,
    important: Boolean,
  }); //Esto nos va a servir para crear instancias de notas
  
  const Note = model("Note",noteScheme)

  module.exports = Note