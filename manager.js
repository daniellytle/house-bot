// let messenger = require('./messenger.js');
var giphy = require('./modules/giphy.js');
// let quotes = require('./modules/quotes.js');

module.exports = {
	handle: function(sender, command, msg, callback) {

		console.log(sender, command, msg);
		var text = "";

		if (command == "giphy") {
			text = giphy.getGif(msg, callback);
		} else if (command == "inspire") {
			// text = quotes.getQuote(msg, callback);
		}
	}
}