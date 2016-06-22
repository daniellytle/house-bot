var messenger = require('./messenger.js');
var giphy = require('./modules/giphy.js');
var convers = require('./modules/conversation.js');

module.exports = {
	handle: function(sender, command, msg, text) {

		if (command === "giphy") {
			// Giphy Gif
			giphy.getGif(msg, function(url) {
				messenger.sendImage(sender, url);
			});
		} else {
			// AI response
			convers.getRes(text, function(err, response, data) {
				// Shorten
				var text = data.result.fulfillment.speech.substring(0, 200);
				messenger.sendText(sender, text);
			})
		}
	}
}