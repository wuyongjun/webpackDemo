import './css/index.css';
import './less/a.less';
import './sass/a.scss';
import imageSrc from './images/123.png';
// import {a, b, cc} from './js/test.js';
// import $ from 'jquery';
import mod, { show, sum } from './js/test.js';
// import { Person } from './js/class_demo.js';
import { Vehicle, Bus } from './js/extend_demo.js';
import { Drag, LimitDrag } from './js/drag_demo.js';
// import('./js/test.js').then(res => {
// 	console.log(res);
// });

// let p = new mod.Person('吴永军', '28');
// let animal = new mod.Animal('兔子');

// console.log(p.showName());
// console.log(animal.showKind());

// show();

// sum();

$('#box').css({
	width: '100px',
	height: '100px',
	background: 'yellow'
});

// let oImg = new Image();
// oImg.src = imageSrc;
// oImg.onload = function () {
//     // document.getElementById('root').appendChild(oImg);
// };
let person = new mod.Person('李世民', 28);
// console.log(person.showName(), person.showAge());
// console.log(person.wuyongjunmethod());

let { showName } = person;
console.log(showName());
person.aaa = 'welcome to world';
console.log(person.aaa);

let a = 'wyj';
let b = 'method';

class Car {

	constructor () {

	};
	// 动态方法名称
	[a+b] () {
		return '测试动态方法名称';
	}
	// 静态方法
	static driving () {
		// console.log(`这是静态方法`);
	};
}

let c = new Car();
console.log(c[a+b]());
// console.log(Car.driving());
let vehicle = new Vehicle('交通工具');
let bus = new Bus('客车', '大型');
console.log('---bus:', bus.showName());
console.log(bus.driving());

// 调用
new Drag('#div1');
new LimitDrag('#div2');
