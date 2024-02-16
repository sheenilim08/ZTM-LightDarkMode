const toogleSwitch = document.querySelector("input[type='checkbox'");
const nav = document.getElementById('nav');
const toogleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function switchImageMode(colorName) {
  image1.src = `img/undraw_proud_coder_${colorName}.svg`;
  image2.src = `img/undraw_feeling_proud_${colorName}.svg`;
  image3.src = `img/undraw_conceptual_idea_${colorName}.svg`;
}

function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toogleIcon.children[0].textContent = "Dark Mode";
  toogleIcon.children[1].className = "fas fa-moon";

  switchImageMode('dark');
}

function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toogleIcon.children[0].textContent = "Light Mode";
  toogleIcon.children[1].className = "fas fa-sun";

  switchImageMode('light');
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode()
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'dark');
    lightMode();
  }
}

toogleSwitch.addEventListener("change", switchTheme);

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toogleSwitch.checked = true;
    darkMode();
  }
}