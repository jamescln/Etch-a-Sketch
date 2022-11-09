// Global variables
const container = document.querySelector(".container");
const etchBox = document.createElement(".div");
etchBox.className = "etch-box";

// Global functions
const createGrid = function () {
  for (let i = 0; i < 16; i++) {
    container.appendChild(etchBox);
  }
};

createGrid();
