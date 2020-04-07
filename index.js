/* eslint-disable no-unused-vars */
require('dotenv').config(); // handles env variables
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const securityNumbers = require('./routes/security-numbers');

const app = express();

app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

// set hearders to allow CORS (Cross Origin Resource Sharing)
app.use(cors());
app.options('*', cors());

app.use(compression());

// ROUTES
app.use('/', securityNumbers);

// ERROR HANDLER
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const { message } = err;
  const { data } = err;

  res.status(statusCode).json({
    message,
    data,
    status: statusCode
  });
});

// START
app.listen(process.env.PORT || 8080, () => {
  console.log(`server started at port ${process.env.PORT || 8080}`);
});
