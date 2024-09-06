const express = require('express');
const routes = require('./api/routes');

const port = process.env.PORT || 3000;
const app = express();

routes(app);

module.exports = app
	.listen(port, () => {
		console.info(`App Started on port ${port}!`);
	})
	.on('error', (err) => {
		console.error(`App Startup failed: ${err}!`);
	});