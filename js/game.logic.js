function Game(tileNames) {
  var tileDeck = makeDeck(tileNames);
  this.grid = makeGrid(tileDeck);
  this.unmatchedPairs = tileNames.length;

  this.flipTile = function(tile) {
    if (tile.flipped) {
      return;
    }

    tile.flip();

    if (!this.firstPick || this.secondPick) {

      if (this.secondPick) {
        this.firstPick.flip();
        this.secondPick.flip();
        this.firstPick = this.secondPick = undefined;
      }

      this.firstPick = tile;

    } else {

      if (this.firstPick.title === tile.title) {
        this.unmatchedPairs--;
        this.firstPick = this.secondPick = undefined;
      } else {
        this.secondPick = tile;
      }
    }
  }
}





