// function Vehicle (name) {
// 	this.name = name;
// }
// Vehicle.prototype.showName = function () {
// 	return `这个是${this.name}`
// };

// function Bus (name, size) {
// 	Vehicle.call(this, name);
// 	this.size = size;
// }
// Bus.prototype = new Vehicle();
// Bus.prototype.driving = function () {
// 	return `我正在开${this.name}，它的大小为${this.size}`
// };

class Vehicle {
	constructor (name) {
		this.name = name;
	};

	showName () {
		console.log(`父类的showName方法执行了`);
		return `这个是${this.name}`;
	};
}

class Bus extends Vehicle {
	constructor (name, size) {
		super(name);
		this.size = size;
	};

	showName () {
		// 调用父类的showName方法
		super.showName();
		console.log(`子类的showName方法执行了`);
		return `这个是我自己的名字：${this.name}`;
	};

	driving () {
		return `我正在开${this.name}，它的大小为${this.size}`;
	};

}

export {
	Vehicle,
	Bus
}