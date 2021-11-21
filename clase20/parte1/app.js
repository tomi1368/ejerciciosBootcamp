const btnTheme = document.querySelector(".btn-dark");
const darkTheme = `darkTheme`;
const moon = `<i class="fas fa-moon"></i>`;
const sun = `<i class="fas fa-sun"></i>`;
const darkItems = document.querySelectorAll("[data-dark]");
const selectedTheme = localStorage.getItem("theme");
const selectedIcon = localStorage.getItem("icon");

const iconActual = () => btnTheme.classList.contains(`sun`);
const themeActual = () => document.body.contains(`darkTheme`);

if (selectedTheme) {
  if(selectedIcon === moon){
    btnTheme.classList.remove("sun");
    btnTheme.innerHTML = moon;
  }else{
    btnTheme.classList.add("sun");
    btnTheme.innerHTML = sun;
  }
  if(selectedTheme == "dark"){
    darkItems.forEach((darkItem) => {
        darkItem.classList.toggle("dark");
      });
  }
}

btnTheme.addEventListener("click", (e) => {
  if (
    e.target == btnTheme ||
    e.target.matches("path") ||
    e.target.matches("svg")
  ) {
    darkItems.forEach((darkItem) => {
      darkItem.classList.toggle("dark");
    });
    if (iconActual()) {
      btnTheme.classList.remove("sun");
      btnTheme.innerHTML = moon;
      localStorage.setItem("theme", "light");
      localStorage.setItem("icon",moon)
    } else {
      btnTheme.classList.add("sun");
      btnTheme.innerHTML = sun;
      localStorage.setItem("icon",sun)
      localStorage.setItem("theme", "dark");
    }
  }
});
