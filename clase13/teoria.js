/* El codigo al verlo de forma imperativa
y al encontrar una funcion asincrona la saca de la cola y
*/

/* function greet() {
    return console.log("hola")
}


function a() {
    return setTimeout(()=>{
        return console.log("amigos")
    },2000)
}


a()
greet() */

let endpoint = "https://rickandmortyapi.com/api/",
character = "character"

fetch(`${endpoint+character}`).then(res=>res.json()).then(res=>console.log(res.results)).catch(err=>console.log(err))