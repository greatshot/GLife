

class Cell {
    constructor () {
        this.currentstate = Math.floor(Math.random() * 2);
        this.total = 0;
    }
    setState(state) {
        this.currentstate = state;
        this.total += state;
    }
}