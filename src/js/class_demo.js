let aaa = 'wuyongjun';
let bbb = 'method';

class Person {
	constructor (name, age) {
		console.log(`constructor`, `这个人的名字是${name}，年龄是${age}`);
		this.name = name;
		this.age = age;
	};
	showName () {
		return `名字为：${this.name}`;
	};
	showAge () {
		return `年龄为：${this.age}`;
	}
	[aaa+bbb] () {
		return `这个是aaa+bbb形成的method`;
	}
}

export {
	Person
}