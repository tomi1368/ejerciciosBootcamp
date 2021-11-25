const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav-deploy")
document.addEventListener("click",e=>{
    if(e.target.matches(".hamburger") || e.target.matches(".line")){
        hamburger.classList.toggle("active")
        nav.classList.toggle("nav-active")
    }
})