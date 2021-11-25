const {Schema,model} = require("mongoose")

const userScheme = new Schema({
    username: String,
    name:String,
    passwordHash:String, //Despues voy a tener que sacar cuando lo muestre
    notes: [{
        type:Schema.Types.ObjectId, //En mi coleccion voy a tener el tipo de dato ObjectId
        ref: "Note" //Hago referencia al modelo de notas, tiene que tener el mismo nombre
    }]

  }); //Esto nos va a servir para crear instancias de notas
  
  const User = model("User",userScheme)

  module.exports = User