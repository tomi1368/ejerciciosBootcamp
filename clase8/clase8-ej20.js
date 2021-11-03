let reporte="lorem ipsum scammer simply laboris sit amet"
let count =0;
let re = reporte.replace(/a/g,"x").trim().split("");


let mapa = re.map(el=>{
    if (el=="e" || el=="i" || el=="o" || el=="u"){
        return el.toUpperCase()
    } else{
        return el
    }
 })

 mapa[0] =  mapa[0].toUpperCase()
 mapa[mapa.length - 1] = "@"


for (let i = 0; i<mapa.length;i++){
    let low = mapa[i].toLowerCase()
    if (low === "a" || low === "e" || low === "i" || low === "o" || low === "u") count++
}


let hola = mapa.join("")
 console.log(count,hola)
