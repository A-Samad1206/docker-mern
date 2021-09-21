/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const database = require('./services/database');
// const api = require('./api/v1');

const app = express();
app.get('/v1', (_req, res) => res.json({ msg: 'Visted 1' }));
app.get('/v2', (_req, res) => res.json({ msg: 'Visted 2' }));
app.get('/v3', (_req, res) => res.json({ msg: 'Visted 3' }));
app.get('/v4', (_req, res) => res.json({ msg: 'Visted 4' }));
database.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// app.use('/v1', api);

app.use((req, res, next) => {
  res.status(404);
  res.json({
    error: true,
    message: 'Not found',
  });
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  console.error(err);

  res.status(statusCode);
  res.json({
    error: true,
    message,
  });
});

module.exports = app;
