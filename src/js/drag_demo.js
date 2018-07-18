class Drag {
	constructor (id) {
		// 获取鼠标点击的div元素
		this.oDiv = document.querySelector(id);
		// 记录鼠标在div上的偏移量
		this.disX = 0;
		this.disY = 0;
		// 调用本对象的初始化方法
		this.init();
	};

	init () {
		// 当鼠标点击在div上时, 并且矫正this的指向
		this.oDiv.onmousedown = function (event) {
			console.log(event);
			// 记录鼠标相对于div的偏移量
			this.disX = event.clientX - this.oDiv.offsetLeft;
			this.disY = event.clientY - this.oDiv.offsetTop;
			// 当鼠标开始移动时
			document.onmousemove = this.fnMove.bind(this);
			document.onmouseup = this.fnUp.bind(this);
			return false;

		}.bind(this);

	};

	fnMove (event) {
		// 改变div的left和top的值
		this.oDiv.style.left = event.clientX - this.disX + 'px';
		this.oDiv.style.top = event.clientY - this.disY + 'px';
	};

	fnUp (event) {
		// 清空鼠标的移动和抬起事件
		document.onmousemove = null;
		document.onmouseup = null;
	};
}

class LimitDrag extends Drag {
	constructor (id) {
		super(id);
	}
	fnMove (ev) {
		super.fnMove(ev);
		if (this.oDiv.offsetLeft < 0) {
			this.oDiv.style.left = 0;
		}
		if (this.oDiv.offsetTop < 0) {
			this.oDiv.style.top = 0;
		}
		console.log(ev.clientY, this.disY, document.body.clientHeight, this.oDiv.offsetHeight);
		if (ev.clientX - this.disX > document.body.clientWidth - this.oDiv.offsetWidth) {
			this.oDiv.style.left = document.body.clientWidth - this.oDiv.offsetWidth + 'px';
		}
	}

}

export {
	Drag,
	LimitDrag
}