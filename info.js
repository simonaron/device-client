var exec = require('child_process').exec;

exec('lscpu | grep Architecture | sed -e s/Architecture://g', (err, stdout, stderr) => {
	console.log('Arch: ')
	if (err) {
		console.error(err);
		return;
	}

	console.log(stdout.trim());
});

exec('hostname -I', (err, stdout, stderr) => {
	console.log('IP: ')
	if (err) {
		console.error(err);
		return;
	}

	console.log(stdout.trim());
});
