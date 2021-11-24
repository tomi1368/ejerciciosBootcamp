const express = require("express")
const cors = require("cors")
const methodOverride = require("method-override")
const app = express()
const port = 7777

let users ={
    
}


app.use(cors())
app.use(methodOverride())
app.use(express.json())



app.get("/")


app.listen(port,()=>{
    console.log(`conectado a ${port}`)
})





