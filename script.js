"use strict";

const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".menu-close");
const menuList = document.querySelector(".menu__list");
menuBtn.addEventListener("click", function (e) {
  menuBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
  menuList.classList.add("vissible");
});

closeBtn.addEventListener("click", function () {
  closeBtn.classList.toggle("hidden");
  menuBtn.classList.toggle("hidden");
  menuList.classList.remove("vissible");
});
