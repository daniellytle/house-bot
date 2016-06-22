var messenger = require('./messenger.js');
var giphy = require('./modules/giphy.js');
var convers = require('./modules/conversation.js');

module.exports = {
	handle: function(sender, command, msg, text) {

		console.log("command:", command);

		if (command === "giphy") {
			console.log('getting giph')
			giphy.getGif(msg, function(url) {
				messenger.sendImage(sender, url);
			});
		} else {
			convers.getRes(text, function(err, response, data) {
				// Shorten
				var text = data.result.fulfillment.speech.substring(0, 200);
				messenger.sendText(sender, text);
			})
		}
	}
}