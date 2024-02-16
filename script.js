const toogleSwitch = document.querySelector("input[type='checkbox'");
const nav = document.getElementById('nav');
const toogleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toogleIcon.children[0].textContent = "Dark Mode";
  toogleIcon.children[1].className = "fas fa-moon";

  image1.src = "img/undraw_proud_coder_dark.svg";
  image2.src = "img/undraw_feeling_proud_dark.svg";
  image3.src = "img/undraw_conceptual_idea_dark.svg";
}

function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toogleIcon.children[0].textContent = "Light Mode";
  toogleIcon.children[1].className = "fas fa-sun";

  image1.src = "img/undraw_proud_coder_light.svg";
  image2.src = "img/undraw_feeling_proud_light.svg";
  image3.src = "img/undraw_conceptual_idea_light.svg";
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode()
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
}

toogleSwitch.addEventListener("change", switchTheme);