var messenger = require('./messenger.js');
var giphy = require('./modules/giphy.js');
var convers = require('./modules/conversation.js');

module.exports = {
	handle: function(sender, command, msg, text) {

		console.log("command:", command);
		var text = "";

		if (command === "giphy") {
			console.log('getting giph')
			giphy.getGif(msg, function(url) {
				messenger.sendImage(sender, url);
			});
		} else {
			convers.getRes(text, function(err, response, data) {
				console.log(data);
				var text = data.result.fulfillment.speech;
				messenger.sendText(sender, text);
			})
		}
	}
}