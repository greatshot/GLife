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

///////////my attempt without the tut//////////
//////////////////////////////////////////////

// when a button is pressed run a render() function that runs the laws of nature
// create a button to pause render()
//create a button to reset render()


// Process world through it's laws of nature.  takes a set
function lawsOfNature (theJudged) {
    
    for (let i = 0; i < theJudged.length; i++) {
        let fate = neighborStatus(theJudged[i]);

        if (fate < 2) {
            theJudged[i].setAttribute('class', 'dead');
        }
        else if (fate == 2 || fate == 3) {
            theJudged[i].setAttribute('class', 'alive');
            
        }
        else {
            theJudged[i].setAttribute('class', 'dead');
        } 
    }
    
    
}

//TODO HTML Create Start Button with id = #start
//TODO HTML Create Stop button id = #stop

//function to start game of life
///do while loop that is true if the start button .class =true.  Runs laws of nature in the loop
// TODO

//Start button function
/// on 'click' then runs lawsOfNature()
//sets #start class to .true
// TODO

//off button function 
///click #stop
///set #start button .class = true
// TODO

// Turns current world into a list of coordinate id's
function getWorldArray (){

    for (let i = 0; i < rows; i++){
        for (let j = 0; j < clms; j++){
            let cellName = i + '_' + j
            let cell = document.getElementById(cellName)

            cells.append(cell)

            return cells         
        }
    }
}

//returns an int representing the sum of a cell's alive neighbors
neighborStatus (a) {

    //do some stuff here to find the sum of alive neighbors
    return sum of alive neighbors as an int;
}











