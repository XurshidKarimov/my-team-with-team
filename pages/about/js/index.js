"use strict";

let plus = document.querySelectorAll(".circle-bg"),
  cardFront = document.querySelectorAll(
    ".directors-content__cardblock-item__user-info"
  ),
  cardBack = document.querySelectorAll(
    ".directors-content__cardblock-item__user-desc"
  );

plus.forEach((item, index) => {
  item.setAttribute("id", +index);
  item.addEventListener("click", () => {
    cardFront[+index].classList.toggle("dsp-none");
    cardBack[+index].classList.toggle("dsp-flex");
    plus[+index].classList.toggle("rotate");
  });
});

let h_icon = document.getElementById("hamburger-icon"),
  h_close = document.getElementById("close-icon"),
  h_menu = document.getElementById("hamburger-menu"),
  shadow = document.getElementById("shadow"),
  body = document.getElementsByTagName("body")[0],
  html = document.getElementsByTagName("html")[0];

h_icon.addEventListener("click", () => {
  shadow.classList.add("active");
  h_menu.classList.remove("close");
  h_menu.classList.add("open");
  body.classList.add("opac");
  html.classList.add("opac");
});

h_close.addEventListener("click", () => {
  shadow.classList.remove("active");
  h_menu.classList.remove("open");
  h_menu.classList.add("close");
  body.classList.remove("opac");
  html.classList.remove("opac");
});
