const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");
const bgMusic = document.getElementById("bg-music");

const harryImg = document.querySelector('.img-HarryPoter');
const comment = document.getElementById('harry-comment');

// Показує коментар після завершення анімації на зображенні
harryImg.addEventListener('animationend', () => {
  comment.style.display = 'block';
});

// Лічильник кліків, змінює коментар на кожен клік
let clickCount = 0;
harryImg.addEventListener('click', () => {
  clickCount++;
  if (clickCount === 1) {
    comment.textContent = 'Я розкажу як получити підказки до тесту!)';
  } else if (clickCount === 2) {
    comment.textContent = 'Подивися фільми!Не шукай легких шляхів';
  } else {
    comment.textContent = 'Удачі з квізами';
  }
});

// Показує форму реєстрації
registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// Показує форму входу
loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Відтворює музику при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () =>{
  bgMusic.play();
});

// Зупиняє музику перед виходом зі сторінки
window.addEventListener("beforeunload", () =>{
  bgMusic.pause();
  bgMusic.currentTime = 0;
});
