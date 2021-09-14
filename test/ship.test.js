import { Ship } from '../src/scripts/index.js';

test('Not sunk after 3 hits on a ship of length 4', () => {
	let testShip = new Ship(4);
	testShip.hit(0);
	testShip.hit(1);
	testShip.hit(2);
	expect(testShip.isSunk()).toBe(false);
});

test('Not sunk after 2 hits on a ship of length 5', () => {
	let testShip = new Ship(5);
	testShip.hit(0);
	testShip.hit(2);
	expect(testShip.isSunk()).toBe(false);
});

test('Sunk after 4 hits on a ship of length 4', () => {
	let testShip = new Ship(4);
	testShip.hit(0);
	testShip.hit(1);
	testShip.hit(2);
	testShip.hit(3);
	expect(testShip.isSunk()).toBe(true);
});

test('Sunk after 5 hits on a ship of length 5', () => {
	let testShip = new Ship(5);
	testShip.hit(0);
	testShip.hit(1);
	testShip.hit(2);
	testShip.hit(3);
	testShip.hit(4);
	expect(testShip.isSunk()).toBe(true);
});
