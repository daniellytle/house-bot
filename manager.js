var messenger = require('./messenger.js');
var giphy = require('./modules/giphy.js');
// let quotes = require('./modules/quotes.js');

module.exports = {
	handle: function(sender, command, msg) {

		console.log("command:", command, msg);
		var text = "";

		if (command === "giphy") {
			console.log('getting giph')
			giphy.getGif(msg, function(url) {
				messenger.sendImage(sender, url);
			});
		} else {
			messenger.sendText(sender, "idk what yousaid ")
		}
	}
}