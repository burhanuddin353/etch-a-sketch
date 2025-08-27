const gridContainer = document.querySelector("#grid-container");
console.log(gridContainer.clientWidth)

for(let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 16; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        console.log(cell.clientWidth)
        row.appendChild(cell);
    }
    gridContainer.appendChild(row)
}