



document.addEventListener("click", e=>{
    if (e.target.matches("a")){
        e.preventDefault()
        e.target.parentNode.parentNode.classList.toggle("hidden")
    }
})