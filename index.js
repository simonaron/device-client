/*
var socket = require('socket.io-client')('http://192.168.0.210:3000');

socket.on('connect', function(){console.log("connected!")});
socket.on('ls', function(){

});
socket.on('disconnect', function(){console.log("disconnected!")});
*/
var sleep = require("sleep");
var exec = require('child_process').exec;


setInterval(()=>{
//while(true) {
//	sleep.sleep(2);	
	exec('git pull', (err, stdout, stderr) => {
	  if (err) {
	    console.error(err);
	    return;
	  }
	  console.log(stdout);
	});
//}
},5000);

