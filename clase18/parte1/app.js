const btns = document.querySelectorAll(".perro")

document.addEventListener("click",e=>{
    console.log(e.target.parentElement.parentElement)
    if (e.target.parentElement.parentElement.classList.contains("perro")){
        btns.forEach(el => {
            el.classList.toggle("hidden")
        })
    }
    if(e.target.matches("path") && e.target.parentElement.parentElement.classList.contains("hearth")){
        e.target.classList.toggle("red")
    }
})