class Integer {
	constructor(number, position) {
		this.number = number;
		this.position = position;
	}

	get value() {
		return this.number * (12**this.position);
	}
}