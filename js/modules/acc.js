// "use strict";

const faqItem = document.querySelectorAll(".faq__item");
const faqItemButton = document.querySelectorAll(".faq__item-button");
const itemTextWrapper = document.querySelectorAll(".item__text-wrapper");

let heightTextWrapper = 0;

itemTextWrapper.forEach((elem) => {
  if (heightTextWrapper < elem.scrollHeight) {
    heightTextWrapper = elem.scrollHeight;
  }
});

faqItemButton.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < faqItem.length; i += 1) {
      if (index === i) {
        itemTextWrapper[i].style.height = faqItem[i].classList.contains(
          "faq__item--activ"
        )
          ? ""
          : `${heightTextWrapper}px`;
        faqItem[i].classList.toggle("faq__item--activ");
      } else {
        faqItem[i].classList.remove("faq__item--activ");
        itemTextWrapper[i].style.height = "";
      }
    }
  });
});
