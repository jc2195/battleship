import Ship from './Ship'

let testShip = new Ship();

beforeEach(() => {
  testShip = new Ship();
});

test('adds correct position to hit array', () => {
  testShip.hit("F6");
  expect(testShip.hits).toEqual(["F6"]);
});

test('returns false if ship is not sunk', () => {
  expect(testShip.isSunk()).toBeFalsy();
});

test('returns true if ship is sunk', () => {
  testShip.length = 3
  testShip.hits = ["F3", "F4", "F5"];
  expect(testShip.isSunk()).toBeTruthy();
});