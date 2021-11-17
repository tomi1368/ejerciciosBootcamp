let par = document.querySelector("p")

document.addEventListener("click",e=>{
   if(e.target.matches(".btn")){
       e.preventDefault()
       par.classList.toggle("hidden")
   }
})



/* Ej 2 */

let ul = document.createElement("ul"),
input = document.createElement("input"),
p = document.createElement("p")

document.body.appendChild(ul)
document.body.appendChild(input)

const crearLi = (text) => {
    let li = document.createElement("li")
    li.textContent = text
    ul.insertAdjacentElement("afterbegin",li)
}

document.addEventListener("keypress",e=>{
    if (e.target == input && e.key == "Enter"){
        crearLi(e.target.value)
    }
})

/* Ej 3 */

let fecha = `${new Date().getUTCFullYear()} Hola`
p.textContent = fecha
document.body.appendChild(p)


/* Ej 4 */


let div = document.createElement("div")
let a1 = document.createElement("a")
let a2 = document.createElement("a")
a1.textContent = "Boton 1"
a2.textContent = "Boton 2"
a1.setAttribute("id","1")
a2.setAttribute("id","2")
div.style.height = "400px"
div.style.width = "400px"
div.style.border= "1px solid red"
div.insertAdjacentElement("afterbegin",a1)
div.insertAdjacentElement("afterbegin",a2)
document.body.insertAdjacentElement("beforeend",div)


document.addEventListener("click",e=>{
    if(e.target== a1 || e.target == a2){
        e.preventDefault()
        console.log(`boton ${e.target.id}/2`)
    }   
    if(e.target == div){
        div.style.backgroundColor = "red"
    }
})


/* Ej 5*/

let form = document.createElement("form"),
inp1 = document.createElement("input"),
inp2 = document.createElement("input"),
inp3= document.createElement("input");

inp3.setAttribute("type","submit")

form.insertAdjacentElement("beforeend",inp1)
form.insertAdjacentElement("beforeend",inp2)
form.insertAdjacentElement("beforeend",inp3)

document.body.insertAdjacentElement("beforeend",form)






