// const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const { checkAuthenticate, errorHandler, handleNotFound } = require('./middleware');

const app = express();
const port = process.env.PORT || 3077;

app.set('port', port);

//middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkAuthenticate);


app.use('/api/auth', routes.authRoutes);
app.use('/api/crawler', routes.crawlerRoutes);

app.use(handleNotFound);
app.use(errorHandler);


//---------app routes



app.listen(port, () => console.log(`App started on port ${port}.`));
