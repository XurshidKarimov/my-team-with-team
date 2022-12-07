"use strict";

let h_icon = document.getElementById("hamburger-icon"),
  h_close = document.getElementById("close-icon"),
  h_menu = document.getElementById("hamburger-menu");

h_icon.addEventListener("click", () => {
  h_menu.classList.remove("close");
  h_menu.classList.add("open");
});

h_close.addEventListener("click", () => {
  h_menu.classList.remove("open");
  h_menu.classList.add("close");
});
