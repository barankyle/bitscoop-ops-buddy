'use strict';

const nunjucks = require('nunjucks');


let renderer = nunjucks.configure('templates');

module.exports = function(event, context, callback) {
	let html = renderer.render('alexa-login.html', event.queryStringParameters);

	var response = {
		statusCode: 200,
		headers: {
			'Content-Type': 'text/html',
			'Access-Control-Allow-Origin': '*'
		},
		body: html
	};

	callback(null, response);

	return Promise.resolve();
};
