// let messenger = require('./messenger.js');
var giphy = require('./modules/giphy.js');
// let quotes = require('./modules/quotes.js');

module.exports = {
	handle: function(sender, command, msg, callback) {

		console.log("command:", command, msg);
		var text = "";

		if (command === "giphy") {
			console.log('getting giph')
			giphy.getGif(msg, callback);
		} else {
			callback(msg[0]);
		}
	}
}