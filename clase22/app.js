const express = require(`express`);
const cors = require(`cors`);
const methodOverride = require(`method-override`);
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
const app = express();
const multer = require(`multer`);
let port = process.env.PORT || 9000;
const SECRET = "vaivgnqb"; //Clave secreta, lo ponemos usando root13 u otros, si paso eso me da "invitado", esto lo vamos a usar para generar el token
const SALT = 10; //Cuanto mas alto el SALT mas tarda el servidor
let users = [];
app.use(methodOverride()); //Permite usar arrays y texto
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); //Para politicas de cors

//El secret es un codigo secreto, que sirve para verificar

//Cuanto mas complejo el algoritmo mas tarda el back en crearlo

app.get("/user/verify/:nombre/:pass", (req, res) => {
  const { nombre, pass } = req.params;
  users.forEach((user) => {
    if (nombre === user.nombre) {
      bcrypt.compare(pass, user.hash, (err, hash) => {
        //Comparo la contraseña pasada por param y la hasheada y las compara, el cb con el parametro hash es true si coinciden
        if (!err) {
          res.send(`verify ${hash}`);
        } else {
          res.send(`No se verifica`);
        }
      });
    }
  });
});

app.get("/create/user/:nombre/:pass", (req, res) => {
  let { nombre, pass } = req.params;
  bcrypt.hash(pass, SALT, (err, hash) => {
    //hash va a ser la contra encriptada
    if (!err) {
      let newLogin = { nombre, pass, hash };
      users = [...users, newLogin];
      res.json(users);
    }
  }); //el nombre lo quiero cifrar y la contraseña. Bycript nos genera un cifrado. Necesito una SALT para funcionar que es el algoritmo que usa de incriptacion.
});

/* {
  "nombre": "tomas",
  "pass": "ESCALERA10",
  "co_pass": "$2b$10$BIRCJ0Ms.4mHoZwZvCyasOfluZ4xBlr944IaEYQgDH0CdgUxKvPIe"
} */

app.get("/login/:nick", (req, res) => {
  let nickname = req.params.nick;
  const payload = {
    //Genero el token y pongo la informacion que quiero mandar para identificar el usuario
    user: nickname,
    role: "guess",
    country: "ARG",
    lang: "ES",
  };
  token = jwt.sign(payload, SECRET, (err, token) => {
    //Me guarda los usuarios que llaman al endpoint
    //Si esta todo bien ejecuto el cb
    if (!err) {
      res.send(token + " tomas");
    }
  }); //Le paso la informacion a enviar y el secreto
});

//Ahora necesito verificar el token
app.get("/verify", (req, res) => {
  //Necesito capturar el token
  const token = req.headers.authorization.split(" ")[1]; //En la autorizacion me envia muchos archivos de texto junto, por lo tanto tengo que separar y usar la ultima parte que es el token
  if (token) {
    //tiene que venir algo
    jwt.verify(token, SECRET, (err, payload) => {
      // en (err,payload) esta el token de la parte de la informacion que es el payload descriptada
      if (!err) {
        res.send(payload);
      }
    });
  }
});

/* ACTIVIDAD JUAN */

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:email", (req, res) => {
  let user = users.find((el) => req.params.email == el);
  res.send(user);
});

app.post("/users/:email/:name/:pass/:role", (req, res) => {
  let { email, name, pass, role } = req.params;
  bcrypt.hash(pass, SALT, (err, hash) => {
    if (!err) {
      let payload = {
        email,
        name,
        hash,
        role: (role in ["1","2","3","4"]) ? role : null
      };

      if(payload.role === null){
        res.send("Rol no reconocido")
      }else{
        users = [...users, payload];
        token = jwt.sign(payload, SECRET, (err, token) => {
          if (!err) {
            res.send(token);
          } else {
            res.send(err);
          }
        });
      }
    } else {
      res.send(`Error al hashear la password`);
    }
  });
});

app.post("/user/:email/:pass", (req, res) => {
  let { email, pass } = req.params;
  console.log(email,pass)
  users.forEach((user) => {
    if (email === user.email) {
      console.log(user.email)
      bcrypt.compare(pass, user.hash, (err, hash) => {
        console.log(pass,user.enc_pass)
        //Comparo la contraseña pasada por param y la hasheada y las compara, el cb con el parametro hash es true si coinciden
        if (!err) {
          res.send(`verify ${hash}`);
        } else {
          res.send(`No se verifica`);
        }
      });
    }
  });
});
app.listen(port, () => {
  console.log(`puerto en ${port}`);
});

/* El token puede tener cualquier cosa. Es un burder json. Es generado por el servidor y es mandado al cliente. Cuando por ejemplo quiere identificarse en una red social. Al darle el token al usuario puede acceder recursos particulares 
Los tokens identifican ciertos endpoints, tambien con ciertos accesos especificos, por ejemplo solos los admins pueden eliminar usuarios.
El token esta compuesto del header que esta hecho con un algoritmo, seguido del payload que seria la informacion como body, y por ultimo la parte de verificacion
*/
