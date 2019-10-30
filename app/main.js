var speedtest = require('speedtest-net');
var test = speedtest({maxTime: 5000});

test.on('data', data => {
	console.dir(data);
});

test.on('error', err => {
	console.error(err);
});