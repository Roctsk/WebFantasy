const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");
const bgMusic = document.getElementById("bg-music")

const harryImg = document.querySelector('.img-HarryPoter');
const comment = document.getElementById('harry-comment');

harryImg.addEventListener('animationend', () => {
  comment.style.display = 'block';
});

let clickCount = 0;
harryImg.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 1) {
    comment.textContent = 'Зараз я розкажу як получити підказки!)';
  } else if (clickCount === 2) {
    comment.textContent = 'Текст після другого кліку';
  } else {
    comment.textContent = 'Удачі з квізами';
  }
});

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.addEventListener("DOMContentLoaded", () =>{
  bgMusic.play();
});

window.addEventListener("beforeunload", () =>{
  bgMusic.pause();
  bgMusic.currentTime = 0;
});