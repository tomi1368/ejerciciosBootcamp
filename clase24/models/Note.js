const {Schema,model} = require("mongoose")
const noteScheme = new Schema({
    content: String,
    name: String,
    fecha: Date,
    important: Boolean,
    user:{
      type:Schema.Types.ObjectId,
      ref:"User"
    }
  }); //Esto nos va a servir para crear instancias de notas
  
  const Note = model("Note",noteScheme)

  module.exports = Note