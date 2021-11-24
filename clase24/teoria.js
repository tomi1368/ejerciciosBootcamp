const mongoose = require('mongoose');
const connectURL =
  'mongodb+srv://toto:1234@cluster0.2gfct.mongodb.net/Notas?retryWrites=true&w=majority';
const { Schema, model } = mongoose;

//Me conecto a la base de datos en Atlas, el connect devuelve una promesa por lo tanto uso .then

mongoose
  .connect(connectURL,{
      useNewUrlParser:true,
      useUnifiedTopology:true,

  }) //Estas opciones son para eliminar cosas deprecadas
  .then((res) => console.log("hola"))
  .catch((err) => console.log(err));

//Vamos a construir un schema que es especificar los tipos de datos que queremos tener en nuestro documento. Estos schemas no se ven en la base de datos son propios de la aplicacion

const noteScheme = new Schema({
  content: String,
  name: String,
  fecha: Date,
  important: Boolean,
}); //Esto nos va a servir para crear instancias de notas

const Note = model("Note",noteScheme) //El nombre "Note" hay que ponerlo en singular porque model("Note") va a convertir "Note" a "notes" entonces obtengo la coleccion notes y le agrego el schema con el segundo parametro. Y la constante hay que ponerla en singular y Mayuscula la primera letra. Estos Scheme son a nivel de aplicacion, osea que tengo que copiarlas en todos los backends.

/* Note.find({})//Los modelos me sirven para encontrar
.then(res=>{
  console.log(`los resultados: ${res}`)
  mongoose.connection.close()
})
.catch(err=>console.log(err))  */
/* los resultados: {
  _id: new ObjectId("619d5a876820a44792977d05"),
  content: 'Tomi es buenardo',
  name: 'Tomas',
  fecha: 2021-11-23T21:17:59.994Z,
  important: true,
  __v: 0
},{
  _id: new ObjectId("619d5b6002d3f7e23b2cd9ec"),
  content: 'Tomi es malardo',
  name: 'Facundo',
  fecha: 2021-11-23T21:21:36.757Z,
  important: true,
  __v: 0
} */



/* const note = new Note({ //instanciamos una nueva nota
  content:"Tomi es malardo",
  name:"Facundo",
  fecha:new Date(),
  important:true
})


note.save()//Guardamos la nota en la base de datos
.then(res=>{
  console.log(res) //el res es el objeto instanciado
  mongoose.connection.close() //Cierro la conexion a la base para que no ocupa recursos
})
.catch(err=>console.log("error al guardar")) */
