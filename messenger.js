var request = require('request');
var config = require('./config');
module.exports = {
	
	/* Sends Messages */

	sendText: function(sender, text) {
		var messageData = { text:text }
		
		request({
			url: 'https://graph.facebook.com/v2.6/me/messages',
			qs: {access_token: config.token},
			method: 'POST',
			json: {
				recipient: {id:sender},
				message: messageData,
			}
		}, function(error, response, body) {
			if (error) {
				console.log('Error sending messages: ', error)
			} else if (response.body.error) {
				console.log('Error: ', response.body.error)
			}
		})
	},

	sendImage: function(sender, url, title = "", subtitle = "") {
		var messageData = {
			"attachment": {
				"type": "template",
				"payload": {
					"template_type": "generic",
					"elements": [{	
						"title": title,
						"subtitle": subtitle			
						"image_url": url					
					}]
				}
			}
		}
		request({
			url: 'https://graph.facebook.com/v2.6/me/messages',
			qs: {access_token: config.token},
			method: 'POST',
			json: {
				recipient: {id:sender},
				message: messageData,
			}
		}, function(error, response, body) {
			if (error) {
				console.log('Error sending messages: ', error)
			} else if (response.body.error) {
				console.log('Error: ', response.body.error)
			}
		})
	}
}
