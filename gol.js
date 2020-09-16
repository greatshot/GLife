const rows = 40;
const clms = 80;

// Creates the table that the game appears within on the webpage

function createWorld () {

    let world = document.querySelector('#world');
    let tbl = document.createElement("table");
    tbl.setAttribute('id', 'worldTbl');

    for (let i = 0; i < rows; i++) {
        let trow = document.createElement("tr");
        for (let j = 0; j < clms; j++) {
            let cell = document.createElement("td");
            cell.setAttribute('id', i + '_' + j);
            cell.setAttribute('class', 'dead');
            cell.addEventListener('click', cellTouch);
            trow.appendChild(cell);
        }
        tbl.appendChild(trow);
    }
    world.appendChild(tbl);
}

// make cell alive or dead

function cellTouch () {

    if (this.className==='alive'){
        this.setAttribute('class', 'dead')
    }
    else {
        this.setAttribute('class', 'alive')
    }
}


window.onload = () => createWorld();










