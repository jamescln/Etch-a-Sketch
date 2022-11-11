// Global variables
const container = document.querySelector(".container");

// Global functions
const createGrid = function () {
  for (let i = 0; i < 256; i++) {
    const etchBox = document.createElement("div");
    etchBox.className = "etch-box";
    container.appendChild(etchBox);
  }
};

createGrid();
