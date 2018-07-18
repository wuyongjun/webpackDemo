const fs = require('fs');

// 封装一层读取文件的方法
function readFile (filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, { encoding:"utf-8" }, (err, file) => {
			if (err) {
				reject(err);
			}
			resolve(file);
		});
	});
}
// 调用读取文件的方法
readFile('../data/a.txt').then((res) => {
	console.log(res);
	return readFile('../data/b.txt');
}).then(res => {
	console.log(res);
	return readFile('../data/c.txt');
}).then(res => {
	console.log(res);
});