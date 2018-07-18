import { a, b } from './1.js';

const show = () => {
	console.log('调用show方法:', a, '---', b);
};
const sum = () => {
	console.log(a + b);
	return a + b;
}
class Person {
	constructor (name, age) {
		this.name = name;
		this.age = age;
		// 矫正this
		this.showName = this.showName.bind(this);
	};
	set aaa (value) {
		console.log(`你设置了属性值为${value}`);
	};
	get aaa () {
		return `你获取到的值`;
	};
	showName () {
		console.log(this);
		return `我是${this.name}，年龄是${this.age}。`;
	};

}
class Animal {
	constructor (kind) {
		this.kind = kind;
	};
	showKind () {
		return `这个动物的物种是${this.kind}`;
	}
}
// export const cc = <h3>我是jsx语法</h3>
// @test
// class Person {
//
// };
// function  test (target) {
//     target.a = 12
// }
// export Person;
export {
	a,
	b,
	show,
	sum
}
export default {
	Person,
	Animal
}
