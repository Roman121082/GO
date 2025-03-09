"use strict";

const menuBurgerButton = document.querySelector(".menu-burger");
const mobilMenu = document.querySelector(".mobile-menu");

// let opacity = 0;
// let translateY = -150;
// const menuAnimation = () => {
//   translateY += 1;

//   mobilMenu.style.cssText = `transform: translateY(${translateY}%`;

//   if (translateY < 0) {
//     requestAnimationFrame(menuAnimation);
//   }
// };

// menuBurgerButton.addEventListener("click", menuAnimation);

menuBurgerButton.addEventListener("click", () => {
  mobilMenu.classList.toggle("mobile-menu--active");
});
