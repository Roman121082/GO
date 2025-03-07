"use strict";

import "./modules/acc.js";

document.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    event.target.focus();
  }
});
