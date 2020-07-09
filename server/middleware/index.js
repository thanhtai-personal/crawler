
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const { secret } = require('./../constants');
const { publicRoutes } = require('./../routes');

const checkAuthenticate = (req, res, next) => {
	if (publicRoutes.includes(req.url)) return next();
	let token = req.body.token || req.headers['x-access-token'];
	if (token) {
		jwt.verify(token, secret, function (err, decoded) {
			if (err) {
				res.send({ error: createError(401), data: err })
			} else {
				req.decoded = decoded;
				next();
			}
		});
	}
	else {
		res.send({ error: createError(401) })
	}
}

const errorHandler = (err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
}

const handleNotFound = (req, res, next) => {
  next(createError(404));
}

module.exports = {
	checkAuthenticate,
  errorHandler,
  handleNotFound
}