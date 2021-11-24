const mongoose = require('mongoose');
const connectURL =
  'mongodb+srv://toto:1234@cluster0.2gfct.mongodb.net/Notas?retryWrites=true&w=majority';
  
mongoose
  .connect(connectURL,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
  }) 
  .then((res) => console.log("conectado a mongo"))
  .catch((err) => console.log(err));