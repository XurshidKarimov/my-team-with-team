"use strict";

let h_icon = document.getElementById("hamburger-icon"),
  h_close = document.getElementById("close-icon"),
  h_menu = document.getElementById("hamburger-menu"),
  shadow = document.getElementById("shadow"),
  body = document.getElementsByTagName("body")[0];

h_icon.addEventListener("click", () => {
  shadow.classList.add("active");
  h_menu.classList.remove("close");
  h_menu.classList.add("open");

  body.classList.add("opac");
});

h_close.addEventListener("click", () => {
  shadow.classList.remove("active");
  h_menu.classList.remove("open");
  h_menu.classList.add("close");

  body.classList.remove("opac");
});
