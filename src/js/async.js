const fs = require('fs');

let readFile = (filepath) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filepath, (err, file) => {
			if (err) reject(err);
			resolve(file);
		});
	});
};

async function fn () {
	// let file1 = await readFile('../data/a.txt');
	// console.log(file1.toString());
	// let file2 = await readFile('../data/b.txt');
	// console.log(file2.toString());
	// let file3 = await readFile('../data/c.txt');
	// console.log(file3.toString());
	// 适用于没有联系的请求
	let [a, b, c] = await Promise.all([
			readFile('../data/a.txt'),
			readFile('../data/b.txt'),
			readFile('../data/c.txt')
		]);
	console.log(a.toString(), b.toString(), c.toString());
}
fn();