const fs = require('fs');
const os = require('os');
var speedtest = require('speedtest-net');
var test = speedtest({maxTime: 5000});

const logPath = './app/logs/log.txt';

var write = function (path, data) {
	try {
		if (fs.existsSync(path)){
			//console.dir('exists');
			fs.appendFile(path, `${os.EOL}${JSON.stringify(data)},` , (err) => {
				if (err) {
					return console.dir(err);
				}
			});
		}
	} catch (error) {
		console.dir(error);
	};
}

test.on('data', data => {
	console.dir(data);
	write(logPath, data);
	
});

test.on('error', err => {
	console.error(err);
});