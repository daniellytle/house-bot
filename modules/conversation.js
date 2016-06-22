var request = require('request')

module.exports = {
		
	/* Conversational Api */
		
	getRes: function(query, callback) {
		console.log("query is:",query)
		request.post({
			url: 'https://api.api.ai/v1/query?v=20150910',
			headers: {
				"content-type": "application/json; charset=utf-8",
				"authorization": "Bearer 737fb10490614339a26530407fba687b"
			},
			json: {
				"query": query,
				"lang": "en",
				'sessionId':'1234567890'
			}
		}, callback);
	},
}
