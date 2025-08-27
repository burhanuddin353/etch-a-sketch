const gridContainer = document.querySelector("#grid-container");
console.log(gridContainer.clientWidth)

function createGrid(squares) {
    for(let i = 0; i < squares; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < squares; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", () => {
                cell.classList.toggle("highlighted-cell");
            });
            cell.addEventListener("mouseleave", () => {
                cell.classList.toggle("highlighted-cell");
            });
            row.appendChild(cell);
        }
        gridContainer.appendChild(row)
    }
}

createGrid(16);
const changeGridButton = document.querySelector("#change-grid-button");
changeGridButton.addEventListener("click", () => {
    let number =  prompt("Number of Squares per side? (Max 100)");
    if (number > 100 || number < 2 || isNaN(number)) {
        alert("Invalid input!");
        return;
    }

    while (gridContainer.childElementCount > 0) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(number);
});