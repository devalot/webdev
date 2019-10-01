class Rectangle {
	constructor(width, height) {
		this.width = width
		this.height = height
	}

	area() {
		return this.width * this.height
	}
}

let rect = new Rectangle(10, 100)

console.log('rect.area()', rect.area())
