import Ship from "./Ship";

class Gameboard {
  constructor() {
    this.board = {
      A1: null, B1: null, C1: null, D1: null, E1: null, F1: null, G1: null, H1: null, I1: null, J1: null,
      A2: null, B2: null, C2: null, D2: null, E2: null, F2: null, G2: null, H2: null, I2: null, J2: null,
      A3: null, B3: null, C3: null, D3: null, E3: null, F3: null, G3: null, H3: null, I3: null, J3: null,
      A4: null, B4: null, C4: null, D4: null, E4: null, F4: null, G4: null, H4: null, I4: null, J4: null,
      A5: null, B5: null, C5: null, D5: null, E5: null, F5: null, G5: null, H5: null, I5: null, J5: null,
      A6: null, B6: null, C6: null, D6: null, E6: null, F6: null, G6: null, H6: null, I6: null, J6: null,
      A7: null, B7: null, C7: null, D7: null, E7: null, F7: null, G7: null, H7: null, I7: null, J7: null,
      A8: null, B8: null, C8: null, D8: null, E8: null, F8: null, G8: null, H8: null, I8: null, J8: null,
      A9: null, B9: null, C9: null, D9: null, E9: null, F9: null, G9: null, H9: null, I9: null, J9: null,
      A10: null, B10: null, C10: null, D10: null, E10: null, F10: null, G10: null, H10: null, I10: null, J10: null
    }
  }

  placeShip(array) {
    const shipLength = array.length;
    const ship = new Ship(shipLength);
    array.forEach((position) => {
      this.board[position] = ship;
    });
  }

  receiveAttack(coordinate) {
    this.board[coordinate] instanceof Ship ? this.board[coordinate].hit(coordinate) : this.board[coordinate] = "X";
  }

  allSunk() {
    let sunkFlag = true;
    for (let position in this.board) {
      if (this.board[position] instanceof Ship) {
        if (this.board[position].isSunk() === false) {
          sunkFlag = false;
        }
      }
    };
    return sunkFlag;
  }
}

export default Gameboard;