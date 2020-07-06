const path = require('path');
const logger = require('morgan');
const express = require('express');
const { sendResponse } = require('./app/helpers');

//import service
const { fetchAuthorProfile } = require('./app/scotch');
const crawlTruyenConvertService = require('./app/truyenconvert/index');
//---------import service

const app = express();
const port = process.env.PORT || 3077;

app.set('port', port);
app.use(logger('dev'));

//app routes
app.use('/', express.static(path.resolve(__dirname, 'public')));

app.get('/scotch/:author', (req, res, next) => {
	const author = req.params.author;
	sendResponse(res)(fetchAuthorProfile(author));
});
//---------app routes
app.listen(port, () => console.log(`App started on port ${port}.`));
