const ps = document.querySelectorAll("p")

ps.forEach(el=> el.style.backgroundColor= "green")

/* Ej2 */
let count=""
let pa = document.createElement("p")

ps.forEach(el=>{
   count += `${el.textContent.length}  `   
})
pa.textContent = count
document.body.insertAdjacentElement("beforebegin",pa) 

/* Ej 3 */



document.addEventListener("click", e=>{
    console.log(e.target)
    if (e.target.matches("a")){
        e.preventDefault()
        document.body.insertAdjacentText("beforebegin",e.target.href)
    }
})

/* Ej 4 */

let imga = document.createElement("img")
imga.setAttribute("src","https://promotonews.com/wp-content/uploads/2020/09/IMG-LOGO.jpg")
document.body.appendChild(imga)