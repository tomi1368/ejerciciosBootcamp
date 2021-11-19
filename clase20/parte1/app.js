const btnTheme = document.querySelector(".clock__theme")
const darkTheme = `darkTheme`
const moon = `fa-moon`

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const iconActual= ()=> btnTheme.classList.contains(`fa-moon`) ? `moon` : 'ligth'
const themeActual = () => document.body.contains(`darkTheme`) ? `fa-moon` : `fa-sun`



if(selectedTheme){
    document.body.classList[selectedTheme== `moon` ? `add` : `remove`](darkTheme)
    btnTheme.classList[selectedIcon === `moon` ? 'add' : 'remove'](moon)
}


document.addEventListener("click",e=>{
    if(e.target == btnTheme){
        document.body.classList.toggle(darkTheme)
        btnTheme.classList.toggle(moon)
        localStorage.setItem(`selected-icon`,iconActual())
        localStorage.setItem(`selected-theme`,themeActual())
    }   
    
 })