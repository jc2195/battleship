import Gameboard from "./Gameboard"
import Ship from "./Ship";

let testBoard = new Gameboard();

beforeEach(() => {
  testBoard = new Gameboard();
});

test('creates ship in correct positions', () => {
  testBoard.placeShip(["H1", "H2", "H3", "H4"]);
  expect(testBoard.board.H1 instanceof Ship).toBeTruthy();
  expect(testBoard.board.H2 instanceof Ship).toBeTruthy();
  expect(testBoard.board.H3 instanceof Ship).toBeTruthy();
  expect(testBoard.board.H4 instanceof Ship).toBeTruthy();
});

test('created ship is of correct length', () => {
  testBoard.placeShip(["H1", "H2", "H3", "H4"]);
  expect(testBoard.board.H1.length).toEqual(4);
  expect(testBoard.board.H2.length).toEqual(4);
  expect(testBoard.board.H3.length).toEqual(4);
  expect(testBoard.board.H4.length).toEqual(4);
});

test('places an x if no ship in position', () => {
  testBoard.receiveAttack("A1");
  expect(testBoard.board.A1).toEqual("X");
});

test('calls the hit function of a ship it hits', () => {
  const hit = Ship.prototype.hit = jest.fn();
  testBoard.placeShip(["H1", "H2", "H3", "H4"]);
  testBoard.receiveAttack("H1");
  expect(hit).toHaveBeenCalledWith("H1");
  expect(hit).toHaveBeenCalledTimes(1);
});

test('returns true if all ships have been sunk', () => {
  let ship = new Ship(1);
  ship.hits = ["A1"];
  testBoard.board.A1 = ship;
  expect(testBoard.allSunk()).toBeTruthy();
});

test('returns false if all ships have not been sunk', () => {
  testBoard.placeShip(["H1", "H2", "H3", "H4"]);
  expect(testBoard.allSunk()).toBeFalsy();
});