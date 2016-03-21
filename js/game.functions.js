function makeDeck(tileNames) {
    var tileDeck = [];
    tileNames.forEach(function (name) {
        tileDeck.push(new Tile(name));
        tileDeck.push(new Tile(name));
    });

    return tileDeck;
}

function makeGrid(tileDeck) {
    var gridDimension = Math.sqrt(tileDeck.length),
        grid = [];

    for (var row = 0; row < gridDimension; row++) {
        grid[row] = [];
        for (var col = 0; col < gridDimension; col++) {
            grid[row][col] = removeRandomTile(tileDeck);
        }
    }

    return grid;
}

function Tile(title) {
    this.title = title;
    this.flipped = false;
}

Tile.prototype.flip = function () {
    this.flipped = !this.flipped;
}

function removeRandomTile(tileDeck) {
    var i = Math.floor(Math.random() * tileDeck.length);
    return tileDeck.splice(i, 1)[0];
}




