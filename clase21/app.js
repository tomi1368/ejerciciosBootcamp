const express = require(`express`);
const cors = require(`cors`)
const methodOverride = require(`method-override`)
const dayjs = require(`dayjs`)
const multer = require(`multer`)
const { v4: uuidv4 } = require('uuid');
const jwt = require(`bcrypt`)
const webtoken = require(`jsonwebtoken`)
const app = express()
let port = process.env.PORT || 7000
let users=[
    {
        nombre:"Tomas",
        email:"tomi@gmail.com",
        password:"perro"
    }
]

app.use(methodOverride()) //Permite usar arrays y texto
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors()) //Para politicas de cors

//Hay que configurar el multer
//diskStorage es para que agarre el almacenamiento de mi disco
//Recibe un objeto con las configs
const multerConfig = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "./bucket") //el null no dice porque, el segundo es la ubicacion de la carpeta
    },
    filename:function(req,file,cb){
        let key = dayjs().format('DD-MM-YYYY') //Esto tiene un serial tipo asdad-asdasdasd-asdasdwq-sadas. Tomo el primero
        cb(null,`${key}-${file.originalname}`) // file.originalname me trae el nombre del archivo
    }
})

// Agrego middleware para multer

const multerMid = multer({storage:multerConfig})    

app.post("/creates",multerMid.single("multi"),(req,res)=>{
    let {nombre,email,pass,alias,multi} = req.body
    console.log(req.body)
    let newUser = {
        nombre,
        alias,
        email,
        pass,
        multi
    }
    users=[...users,newUser]
    res.send(users)
})


app.get(`/`,(req,res)=>{
    res.send(users) //Lo ejecuto como funcion
})

app.post("/upload", multerMid.single(`multi`),(req,res)=>{ //en el single pongo el name del input que lo esta usando
    if(req.file){ //Si hay algun archivo
        res.send("imagen guardada")
    }else{
        res.send("no existe")
    }
}) //Pego el upload en el form


/* 
var upload = multer({
    // CREATE MULTER-S3 FUNCTION FOR STORAGE
    storage: multerS3({
        s3: S3,
        acl: 'public-read',
        // bucket - WE CAN PASS SUB FOLDER NAME ALSO LIKE 'bucket-name/sub-folder1'
        bucket: 'bucket-name',
        // META DATA FOR PUTTING FIELD NAME
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        // SET / MODIFY ORIGINAL FILE NAME
        key: function (req, file, cb) {
            cb(null, file.originalname); //set unique file name if you wise using Date.toISOString()
            // EXAMPLE 1
            // cb(null, Date.now() + '-' + file.originalname);
            // EXAMPLE 2
            // cb(null, new Date().toISOString() + '-' + file.originalname);

        }
    }),
    // SET DEFAULT FILE SIZE UPLOAD LIMIT
    limits: { fileSize: 1024 * 1024 * 50 }, // 50MB
    // FILTER OPTIONS LIKE VALIDATING FILE EXTENSION
    fileFilter: function(req, file, cb) {
        const filetypes = /jpeg|jpg|png/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb("Error: Allow images only of extensions jpeg|jpg|png !");
        }
    }
}); 


app.post('/upload', upload.single('file'), function (req, res, next) {
    console.log('Uploaded!');
    res.send(req.file);
});
----
app.post('/upload', upload.array('file', 1), function (req, res, next) {
    console.log('Uploaded!');
    res.send(req.files);
});
----
app.post('/upload', upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'gallery', maxCount: 8 }
]), function (req, res, next) {
    console.log('Uploaded!');
    res.send(req.files);
});


*/



app.listen(port,()=>{
    console.log(`iniciado en puerto ${port}`)
})

