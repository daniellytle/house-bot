module.exports = {
	
	/* Giphy Support */

	getGif: function(query, callback) {
		query = query.toString();
		query = query.replace(',','+');
		console.log(query);
		request('http://api.giphy.com/v1/gifs/search?q='+ query +'&api_key=dc6zaTOxFJmzC', function(error, response, body) {
			body = JSON.parse(body);
			var id = body.data[0].id;
			var url = "http://i.giphy.com/" + id + ".gif";
			callback(url);
		})
	}
}