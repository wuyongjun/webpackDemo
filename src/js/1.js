const a = 101;
const b = 200
export {
	a,
	b
}
function Person (name, age) {
	this.name = name;
	this.age = age;
}
Object.assign(Person.prototype, {
	showName: function () {
		return `我的名字叫${this.name}`;
	},
	showAge: function () {
		return `我的年龄是${this.age}`;
	}
});



export {
	Person
}