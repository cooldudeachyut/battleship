import '../styles/style.css';

export class Ship	{
	#length;
	#hitArr;

	constructor (length)	{
		this.#length = length;
		this.#hitArr = [];
		for (let i = 0; i < length; i++)	this.#hitArr.push(false);
	}

	hit (position)	{
		if (this.#hitArr[position])	return false;
		
		this.#hitArr[position] = true;
		return true;
	}

	isSunk()	{
		for (let i = 0; i < this.#length; i++)	{
			if (this.#hitArr[i] === false)	return false;
		}

		return true;
	}
}

export class Gameboard	{
	#size;
	#shipsArr;
	#startCoordinatesArr;
	#endCoordinatesArr;

	constructor (size)	{
		this.#size = size;
		this.#shipsArr = [];
		this.#startCoordinatesArr = [];
		this.#endCoordinatesArr = [];
	}

	placeShip (startCoordinates, length, orientation)	{
		let newShip = new Ship(length);

		if (orientation === 'x')	{
			if (startCoordinates[1] <= this.#size && startCoordinates[1] >= 0)	{
				if (startCoordinates[0] >= 0 && (startCoordinates[0] + length) <= this.#size)	{
					
				}
			}
		}
	}
}