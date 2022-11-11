// Global variables
const container = document.querySelector(".container");

// Global functions
const createGrid = function () {
  for (let i = 0; i < 256; i++) {
    const etchBox = document.createElement("div");
    etchBox.className = "etch-box";
    etchBox.onmouseover = (event) => {
      event.target.className = "etch-box-active";
    };
    container.appendChild(etchBox);
  }
};

createGrid();
