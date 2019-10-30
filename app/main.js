const fs = require('fs');
const os = require('os');
var speedtest = require('speedtest-net');
var test = speedtest({maxTime: 5000});

const logPath = './app/speedLog/log.log';

/**
 * TODO
 * ADD COMMANDER TO PARSE CLI ARGUMENTS FOR PATH
**/

var append = function (path, data) {
	fs.appendFile(path, `${JSON.stringify(data)},${os.EOL}` , (err) => {
		if (err) {
			return console.dir(err);
		}
	});
}

var write = function (path, data) {
	fs.writeFile(path, `${JSON.stringify(data)},${os.EOL}` , (err) => {
		if (err) {
			return console.dir(err);
		}
	});
}

test.on('data', data => {
	console.dir(data);	
	try {
		if (fs.existsSync(logPath)){
			console.dir('log file exists');
			append(logPath, data);
		} else {
			console.dir(`log file doesn't exists`);
			write(logPath, data);
		}
	} catch (error) {
		console.dir(error);
	};
});

test.on('error', err => {
	console.error(err);
});