const fs = require('fs');

let readFile = (filepath) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filepath, (err, file) => {
			if (err) reject(err);
			resolve(file); 
		});
	});
};

function * gen () {
	yield readFile('../data/a.txt');
	yield readFile('../data/b.txt');
	yield readFile('../data/c.txt');
}

gen().next().value.then(res => {
	console.log(res.toString());
	return gen().next().value;
}).then(res => {
	console.log(res.toString());
	return gen().next().value;
}).then(res => {
	console.log(res.toString());
});