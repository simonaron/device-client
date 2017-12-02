
var socket = require('socket.io-client')('http://192.168.0.210:3000');
//var sleep = require("sleep");
var exec = require('child_process').exec;


socket.on('connect', function(){console.log("connected!")});
socket.on('update', function(){
	exec('git pull', (err, stdout, stderr) => {
	  if (err) {
	    console.error(err);
	    return;
	  }
	  console.log(stdout);
	});
	//console.log("UPDATED :) ")
});
socket.on('disconnect', function(){console.log("disconnected!")});
