class Ship {
  constructor(length = null) {
    this.length = length;
    this.hits = [];
    this.sunk = false;
  }

  hit(location) {
    this.hits.push(location);
  }

  isSunk() {
    return this.length === this.hits.length ? true : false;
  }
}
export default Ship;