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
