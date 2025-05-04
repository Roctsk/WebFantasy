const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");
const bgMusic = document.getElementById("bg-music")

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